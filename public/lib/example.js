(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./lib/xgl');

module.exports = {
  Canvas: require('./lib/canvas'),
  Mask: require('./lib/element/mask'),
  Part: require('./lib/element/part'),
  Scene: require('./lib/element/scene'),
  Camera: require('./lib/element/camera'),
  CanvasElement: require('./lib/element/canvas'),
  ColouredCanvasElement: require('./lib/element/canvas/coloured'),
  TexturedCanvasElement: require('./lib/element/canvas/textured')
};

},{"./lib/canvas":2,"./lib/element/camera":5,"./lib/element/canvas":6,"./lib/element/canvas/coloured":7,"./lib/element/canvas/textured":9,"./lib/element/mask":10,"./lib/element/part":11,"./lib/element/scene":12,"./lib/xgl":87}],2:[function(require,module,exports){
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
    value: function render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var offsetMatrixUniformLocation = renderer.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = renderer.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = renderer.getNormalMatrixUniformLocation();

      this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
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

},{"./mixin/blending":34,"./mixin/buffer":35,"./mixin/colour":36,"./mixin/depth":37,"./mixin/matrix":38,"./mixin/program":39,"./mixin/shader":40,"./mixin/texture":41}],3:[function(require,module,exports){
'use strict';

var Z_FAR = 1000,
    Z_NEAR = 1,
    MOUSE_UP = 'MOUSE_UP',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_MOVE = 'MOUSE_MOVE',
    MOUSE_WHEEL = 'MOUSE_WHEEL',
    CTRL_KEY_CODE = 17,
    SHIFT_KEY_CODE = 16,
    VERTICES_LENGTH = 3,
    MINIMUM_DISTANCE = 1,
    DEGREES_TO_RADIANS = Math.PI / 180,
    FIELD_OF_VIEW = 45 * DEGREES_TO_RADIANS,
    ANGLES_SCALAR = 0.01,
    OFFSET_SCALAR = 0.25,
    INITIAL_ANGLES = [0, 0],
    DISTANCE_SCALAR = 1.25,
    DEFAULT_MARGIN_OF_ERROR = 0.0000001,
    INITIAL_MOUSE_COORDINATES = [0, 0];

module.exports = {
  Z_FAR: Z_FAR,
  Z_NEAR: Z_NEAR,
  MOUSE_UP: MOUSE_UP,
  MOUSE_DOWN: MOUSE_DOWN,
  MOUSE_MOVE: MOUSE_MOVE,
  MOUSE_WHEEL: MOUSE_WHEEL,
  CTRL_KEY_CODE: CTRL_KEY_CODE,
  SHIFT_KEY_CODE: SHIFT_KEY_CODE,
  VERTICES_LENGTH: VERTICES_LENGTH,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE,
  DEGREES_TO_RADIANS: DEGREES_TO_RADIANS,
  FIELD_OF_VIEW: FIELD_OF_VIEW,
  ANGLES_SCALAR: ANGLES_SCALAR,
  OFFSET_SCALAR: OFFSET_SCALAR,
  INITIAL_ANGLES: INITIAL_ANGLES,
  DISTANCE_SCALAR: DISTANCE_SCALAR,
  DEFAULT_MARGIN_OF_ERROR: DEFAULT_MARGIN_OF_ERROR,
  INITIAL_MOUSE_COORDINATES: INITIAL_MOUSE_COORDINATES
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
    Pan = require('../miscellaneous/pan'),
    Tilt = require('../miscellaneous/tilt'),
    Zoom = require('../miscellaneous/zoom'),
    KeyEvents = require('../miscellaneous/keyEvents'),
    MouseEvents = require('../miscellaneous/mouseEvents'),
    cameraUtilities = require('../utilities/camera');

var calculateOffsetMatrix = cameraUtilities.calculateOffsetMatrix,
    calculateRotationMatrix = cameraUtilities.calculateRotationMatrix,
    calculatePositionMatrix = cameraUtilities.calculatePositionMatrix,
    calculateProjectionMatrix = cameraUtilities.calculateProjectionMatrix,
    calculateNormalMatrix = cameraUtilities.calculateNormalMatrix;


var defaultInitialDistance = 5,
    defaultInitialOffset = [0, 0, 0];

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(pan, tilt, zoom, keyEvents, mouseEvents, updateHandler) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.pan = pan;
    _this.tilt = tilt;
    _this.zoom = zoom;
    _this.keyEvents = keyEvents;
    _this.mouseEvents = mouseEvents;
    _this.updateHandler = updateHandler;
    return _this;
  }

  _createClass(Camera, [{
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.pan.shiftKeyHandler(shiftKeyDown);

      this.tilt.shiftKeyHandler(shiftKeyDown);
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.tilt.mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown);

      this.pan.mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown, this.tilt);

      if (mouseDown) {
        this.update(canvas);
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update(canvas);
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
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
          height = canvas.getHeight(),
          offset = this.pan.getOffset(),
          angles = this.tilt.getAngles(),
          distance = this.zoom.getDistance(),
          offsetMatrix = calculateOffsetMatrix(offset),
          rotationMatrix = calculateRotationMatrix(angles),
          positionMatrix = calculatePositionMatrix(distance),
          projectionMatrix = calculateProjectionMatrix(width, height),
          normalMatrix = calculateNormalMatrix(rotationMatrix);

      this.updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      ///
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          pan = Pan.fromInitialOffset(initialOffset),
          tilt = Tilt.fromNothing(),
          zoom = Zoom.fromInitialDistance(initialDistance),
          keyEvents = null,
          mouseEvents = null,
          updateHandler = null,
          camera = Element.fromProperties(Camera, properties, pan, tilt, zoom, keyEvents, mouseEvents, updateHandler);


      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"../element":4,"../miscellaneous/keyEvents":29,"../miscellaneous/mouseEvents":30,"../miscellaneous/pan":31,"../miscellaneous/tilt":32,"../miscellaneous/zoom":33,"../utilities/camera":78}],6:[function(require,module,exports){
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

  function CanvasElement(transform, facets, mask) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;
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
      this.facets.forEach(function (facet) {
        return facet.applyTransform(transform);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransform(transform);
      });
    }
  }, {
    key: 'applyTransformsAndMasks',
    value: function applyTransformsAndMasks() {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
      });

      this.applyTransform(this.transform);

      this.applyMask(this.mask);
    }
  }, {
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.render(colourRenderer, textureRenderer);
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var scale = properties.scale,
          position = properties.position,
          rotations = properties.rotations,
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          transform = composeTransform(scale, position, rotations),
          facets = [],
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;

},{"../element":4,"../utilities/transform":85}],7:[function(require,module,exports){
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

  function ColouredCanvasElement() {
    _classCallCheck(this, ColouredCanvasElement);

    return _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).apply(this, arguments));
  }

  _createClass(ColouredCanvasElement, [{
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      colourRenderer.addFacets(facets);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'render', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      var colouredCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties].concat(remainingArguments)),
          indexTuples = indexes,
          ///
      facets = indexTuples.map(function (indexTuple) {
        var coordinateTuples = coordinates,
            ///
        colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour),
            facet = colouredFacet; ///

        return facet;
      });

      colouredCanvasElement.setFacets(facets);

      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;

},{"../../element/canvas":6,"../../primitive/facet/coloured":45}],8:[function(require,module,exports){
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

},{"../../element/canvas":6}],9:[function(require,module,exports){
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

  function TexturedCanvasElement() {
    _classCallCheck(this, TexturedCanvasElement);

    return _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).apply(this, arguments));
  }

  _createClass(TexturedCanvasElement, [{
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      textureRenderer.addFacets(facets);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'render', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      var texturedCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, facets].concat(remainingArguments)),
          indexTuples = indexes,
          ///
      facets = indexTuples.map(function (indexTuple, index) {
        var coordinateTuples = coordinates,
            ///
        vertexTextureCoordinateTuples = textureCoordinates[index],
            ///
        texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, imageName),
            facet = texturedFacet; ///

        return facet;
      });

      texturedCanvasElement.setFacets(facets);

      return texturedCanvasElement;
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;

},{"../../element/canvas":6,"../../primitive/facet/textured":46}],10:[function(require,module,exports){
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

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
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
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var mask = Element.fromProperties(Mask, properties);

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

},{"../element":4,"../primitive/maskingFacet":47,"../utilities/array":77}],11:[function(require,module,exports){
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

  function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.images = images;
    _this.imageMap = imageMap;
    _this.imageNames = imageNames;
    _this.imageTiling = imageTiling;
    _this.imageMapJSON = imageMapJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Part, [{
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.colourRenderer && this.colourRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix); ///

      this.textureRenderer && this.textureRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix); ///
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
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
        return childElement.applyTransformsAndMasks();
      });

      childElements.forEach(function (childElement) {
        return childElement.render(colourRenderer, textureRenderer);
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
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;

},{"../element":4,"../renderer/colour":56,"../renderer/texture/imageMap":73,"../renderer/texture/images":74}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

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
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var _this2 = this;

      this.canvas.clear();

      this.childElements.forEach(function (childElement) {
        return childElement.render(_this2.canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      });
    }
  }, {
    key: 'initialise',
    value: function initialise(done) {
      var _this3 = this;

      var childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

      this.assignContext();

      this.onResize(resizeHandler);

      this.onUpdate(updateHandler);

      childElements.forEach(function (childElement) {
        return childElement.initialise(_this3.canvas);
      });

      this.resizeHandler(); ///

      done && done(); ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var canvas = properties.canvas,
          done = properties.done,
          scene = Element.fromProperties(Scene, properties, canvas);


      scene.initialise(done);

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;

},{"../element":4}],13:[function(require,module,exports){
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

},{"./example/cube":14,"./example/masking":22,"./example/pyramid":23,"./example/simple":24,"./example/tiling":25}],14:[function(require,module,exports){
'use strict';

var xgl = require('../../index'); ///

var Cube = require('./element/cube');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    Camera = xgl.Camera;


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
		React.createElement(Camera, null)
	);
};

module.exports = cubeExample;

},{"../../index":1,"./element/cube":16}],15:[function(require,module,exports){
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

},{"../../../index":1}],16:[function(require,module,exports){
'use strict';

var Face = require('./face');

var defaultColour = [1, 1, 0];

var Cube = function Cube(properties) {
  var _properties$colour = properties.colour,
      colour = _properties$colour === undefined ? defaultColour : _properties$colour;


  return [React.createElement(Face, { colour: colour, rotations: [0, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [+90, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [0, +90, 0] }), React.createElement(Face, { colour: colour, rotations: [180, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [-90, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [0, -90, 0] })];
};

module.exports = Cube;

},{"./face":17}],17:[function(require,module,exports){
'use strict';

var ColouredSquare = require('./colouredSquare');

var Face = function Face(properties) {
  var colour = properties.colour;


  return React.createElement(ColouredSquare, { colour: colour, position: [-0.5, -0.5, +0.5] });
};

module.exports = Face;

},{"./colouredSquare":15}],18:[function(require,module,exports){
'use strict';

var Side = require('./side');

var Pyramid = function Pyramid(properties) {
  return [React.createElement(Side, null), React.createElement(Side, { rotations: [0, 90, 0] }), React.createElement(Side, { rotations: [0, 180, 0] }), React.createElement(Side, { rotations: [0, 270, 0] })];
};

module.exports = Pyramid;

},{"./side":19}],19:[function(require,module,exports){
'use strict';

var TexturedTriangle = require('./texturedTriangle');

var Side = function Side(properties) {
  return React.createElement(TexturedTriangle, { scale: [1, 1 / Math.sqrt(2), 1], position: [-0.5, 0, 0.5], rotations: [-45, 0, 0] });
};

module.exports = Side;

},{"./texturedTriangle":21}],20:[function(require,module,exports){
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

},{"../../../index":1}],21:[function(require,module,exports){
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

},{"../../../index":1}],22:[function(require,module,exports){
'use strict';

var xgl = require('../../index'); ///

var Cube = require('./element/cube');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Mask = xgl.Mask,
    Part = xgl.Part,
    Camera = xgl.Camera;


var canvas = new Canvas();

var maskingExample = function maskingExample() {
  var SmallCube = React.createElement(Cube, { scale: [1 / 4, 1 / 4, 1 / 4] }),
      smallCubeMask = React.createElement(
    Mask,
    null,
    React.createElement(SmallCube, null)
  ),
      MediumCube = React.createElement(Cube, { scale: [1 / 2, 1 / 2, 1 / 2], mask: smallCubeMask }),
      mediumCubeMask = React.createElement(
    Mask,
    null,
    React.createElement(MediumCube, null)
  ),
      LargeCube = React.createElement(Cube, { mask: mediumCubeMask });

  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      null,
      React.createElement(LargeCube, null)
    ),
    React.createElement(Camera, null)
  );
};

module.exports = maskingExample;

},{"../../index":1,"./element/cube":16}],23:[function(require,module,exports){
'use strict';

var xgl = require('../../index'); ///

var Pyramid = require('./element/pyramid'),
    configuration = require('../miscellaneous/configuration');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    Camera = xgl.Camera;


var canvas = new Canvas();

var pyramidExample = function pyramidExample() {
  preloadImageMap(function (imageMap) {
    var imageMapJSON = configuration.imageMapJSON;


    return React.createElement(
      Scene,
      { canvas: canvas, done: done },
      React.createElement(
        Part,
        { imageMap: imageMap, imageMapJSON: imageMapJSON },
        React.createElement(Pyramid, null)
      ),
      React.createElement(Camera, null)
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

function done() {
  console.log('Done!');
}

},{"../../index":1,"../miscellaneous/configuration":28,"./element/pyramid":18}],24:[function(require,module,exports){
'use strict';

var xgl = require('../../index'); ///

var ColouredSquare = require('./element/colouredSquare');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    Camera = xgl.Camera;


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
    React.createElement(Camera, null)
  );
};

module.exports = simpleExample;

},{"../../index":1,"./element/colouredSquare":15}],25:[function(require,module,exports){
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
    Camera = xgl.Camera,
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
      { canvas: canvas, done: done },
      React.createElement(
        Part,
        { images: images, imageNames: imageNames, imageTiling: true },
        React.createElement(TexturedQuadrangle, { position: [0, 0, 0], imageName: 'floorboards.jpg', mask: mask }),
        React.createElement(TexturedQuadrangle, { position: [-0.5, -0.5, -0.5], imageName: 'paving.jpg', mask: mask })
      ),
      React.createElement(Camera, null)
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

function done() {
  console.log('Done!');
}

},{"../../index":1,"../miscellaneous/configuration":28,"./element/colouredSquare":15,"./element/texturedQuadrangle":20,"necessary":89}],26:[function(require,module,exports){
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
  var a00 = matrix[0],
      a01 = matrix[1],
      a02 = matrix[2],
      a10 = matrix[3],
      a11 = matrix[4],
      a12 = matrix[5],
      a20 = matrix[6],
      a21 = matrix[7],
      a22 = matrix[8],
      b01 = a22 * a11 - a12 * a21,
      b11 = -a22 * a10 + a12 * a20,
      b21 = a21 * a10 - a11 * a20,
      determinant = a00 * b01 + a01 * b11 + a02 * b21;

  if (determinant !== 0) {
    return [b01 / determinant, (-a22 * a01 + a02 * a21) / determinant, (a12 * a01 - a02 * a11) / determinant, b11 / determinant, (a22 * a00 - a02 * a20) / determinant, (-a12 * a00 + a02 * a10) / determinant, b21 / determinant, (-a21 * a00 + a01 * a20) / determinant, (a11 * a00 - a01 * a10) / determinant];
  }
}

function invert4(matrix) {
  var a00 = matrix[0],
      a01 = matrix[1],
      a02 = matrix[2],
      a03 = matrix[3],
      a10 = matrix[4],
      a11 = matrix[5],
      a12 = matrix[6],
      a13 = matrix[7],
      a20 = matrix[8],
      a21 = matrix[9],
      a22 = matrix[10],
      a23 = matrix[11],
      a30 = matrix[12],
      a31 = matrix[13],
      a32 = matrix[14],
      a33 = matrix[15],
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
      determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (determinant !== 0) {
    return [(a11 * b11 - a12 * b10 + a13 * b09) / determinant, (a02 * b10 - a01 * b11 - a03 * b09) / determinant, (a31 * b05 - a32 * b04 + a33 * b03) / determinant, (a22 * b04 - a21 * b05 - a23 * b03) / determinant, (a12 * b08 - a10 * b11 - a13 * b07) / determinant, (a00 * b11 - a02 * b08 + a03 * b07) / determinant, (a32 * b02 - a30 * b05 - a33 * b01) / determinant, (a20 * b05 - a22 * b02 + a23 * b01) / determinant, (a10 * b10 - a11 * b08 + a13 * b06) / determinant, (a01 * b08 - a00 * b10 - a03 * b06) / determinant, (a30 * b04 - a31 * b02 + a33 * b00) / determinant, (a21 * b02 - a20 * b04 - a23 * b00) / determinant, (a11 * b07 - a10 * b09 - a12 * b06) / determinant, (a00 * b09 - a01 * b07 + a02 * b06) / determinant, (a31 * b01 - a30 * b03 - a32 * b00) / determinant, (a20 * b03 - a21 * b01 + a22 * b00) / determinant];
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

  return [matrix[0] * x, matrix[1] * x, matrix[2] * x, matrix[3] * x, matrix[4] * y, matrix[5] * y, matrix[6] * y, matrix[7] * y, matrix[8] * z, matrix[9] * z, matrix[10] * z, matrix[11] * z, matrix[12], matrix[13], matrix[14], matrix[15]];
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
        a00 = matrix[0],
        a01 = matrix[1],
        a02 = matrix[2],
        a03 = matrix[3],
        a10 = matrix[4],
        a11 = matrix[5],
        a12 = matrix[6],
        a13 = matrix[7],
        a20 = matrix[8],
        a21 = matrix[9],
        a22 = matrix[10],
        a23 = matrix[11],
        b00 = x * x * t + c,
        b01 = y * x * t + z * s,
        b02 = z * x * t - y * s,
        b10 = x * y * t - z * s,
        b11 = y * y * t + c,
        b12 = z * y * t + x * s,
        b20 = x * z * t + y * s,
        b21 = y * z * t - x * s,
        b22 = z * z * t + c;

    return [a00 * b00 + a10 * b01 + a20 * b02, a01 * b00 + a11 * b01 + a21 * b02, a02 * b00 + a12 * b01 + a22 * b02, a03 * b00 + a13 * b01 + a23 * b02, a00 * b10 + a10 * b11 + a20 * b12, a01 * b10 + a11 * b11 + a21 * b12, a02 * b10 + a12 * b11 + a22 * b12, a03 * b10 + a13 * b11 + a23 * b12, a00 * b20 + a10 * b21 + a20 * b22, a01 * b20 + a11 * b21 + a21 * b22, a02 * b20 + a12 * b21 + a22 * b22, a03 * b20 + a13 * b21 + a23 * b22, matrix[12], matrix[13], matrix[14], matrix[15]];
  }
}

function translate4(matrix, vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2],
      a00 = matrix[0],
      a01 = matrix[1],
      a02 = matrix[2],
      a03 = matrix[3],
      a10 = matrix[4],
      a11 = matrix[5],
      a12 = matrix[6],
      a13 = matrix[7],
      a20 = matrix[8],
      a21 = matrix[9],
      a22 = matrix[10],
      a23 = matrix[11];

  return [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a00 * x + a10 * y + a20 * z + matrix[12], a01 * x + a11 * y + a21 * z + matrix[13], a02 * x + a12 * y + a22 * z + matrix[14], a03 * x + a13 * y + a23 * z + matrix[15]];
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

},{}],27:[function(require,module,exports){
'use strict';

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

},{}],28:[function(require,module,exports){
'use strict';

module.exports = window.__configuration__; ///

},{}],29:[function(require,module,exports){
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

},{"../constants":3}],30:[function(require,module,exports){
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

},{"../constants":3}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES;

var Pan = function () {
  function Pan(offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

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
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (shiftKeyDown) {
        this.previousOffset = this.offset;

        this.previousMouseCoordinates = this.mouseCoordinates;
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.previousOffset = this.offset;

      if (this.shiftKeyDown) {
        this.previousOffset = this.offset;

        this.previousMouseCoordinates = this.mouseCoordinates;
      }
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown, tilt) {
      this.mouseCoordinates = mouseCoordinates;

      if (mouseDown && shiftKeyDown) {
        this.updateOffset(tilt);
      }
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffset),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffset);

      this.offset = add3(add3(this.previousOffset, yAngleOffset), xAngleOffset); ///
    }
  }], [{
    key: 'fromInitialOffset',
    value: function fromInitialOffset(initialOffset) {
      var offset = initialOffset,
          ///
      previousOffset = offset,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      pan = new Pan(offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;

function calculateYAngleOffset(yAngle, relativeOffset) {
  var relativeOffsetComponents = relativeOffset,
      ///
  firstRelativeOffsetComponent = first(relativeOffsetComponents),
      yAngleOffset = [-Math.cos(yAngle) * firstRelativeOffsetComponent, +0, -Math.sin(yAngle) * firstRelativeOffsetComponent];

  return yAngleOffset;
}

function calculateXAngleOffset(xAngle, yAngle, relativeOffset) {
  var relativeOffsetComponents = relativeOffset,
      ///
  secondRelativeOffsetComponent = second(relativeOffsetComponents),
      xAngleOffset = [-Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffsetComponent, -Math.cos(xAngle) * secondRelativeOffsetComponent, +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffsetComponent];

  return xAngleOffset;
}

},{"../constants":3,"../maths/vector":27,"../utilities/array":77}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add2 = vectorMaths.add2,
    scale2 = vectorMaths.scale2,
    subtract2 = vectorMaths.subtract2,
    ANGLES_SCALAR = constants.ANGLES_SCALAR,
    INITIAL_ANGLES = constants.INITIAL_ANGLES,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES;

var Tilt = function () {
  function Tilt(angles, previousAngles, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Tilt);

    this.angles = angles;
    this.previousAngles = previousAngles;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngle = second(this.angles),
          xAngle = secondAngle; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngle = first(this.angles),
          yAngle = -firstAngle; ///

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
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.previousAngles = this.angles;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown) {
      this.mouseCoordinates = mouseCoordinates;

      if (mouseDown && !shiftKeyDown) {
        this.updateAngles();
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (!shiftKeyDown) {
        this.previousAngles = this.angles;

        this.previousMouseCoordinates = this.mouseCoordinates;
      }
    }
  }, {
    key: 'updateAngles',
    value: function updateAngles() {
      var scalar = ANGLES_SCALAR,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngles = scale2(relativeMouseCoordinates, scalar);

      this.angles = add2(this.previousAngles, relativeAngles);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var angles = INITIAL_ANGLES,
          previousAngles = angles,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(angles, previousAngles, mouseCoordinates, previousMouseCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

module.exports = Tilt;

},{"../constants":3,"../maths/vector":27,"../utilities/array":77}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

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
          ///
      zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

module.exports = Zoom;

},{"../constants":3}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],39:[function(require,module,exports){
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

},{}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
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

},{"../maths/vector":27}],43:[function(require,module,exports){
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

},{"../../maths/vector":27,"../../utilities/array":77,"../../utilities/midPoint":81,"../edge":42}],44:[function(require,module,exports){
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

},{"../constants":3,"../utilities/array":77,"../utilities/facet":79,"../utilities/intersection":80,"../utilities/midPoint":81,"./edge":42,"./normal":48,"./vertex":49}],45:[function(require,module,exports){
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

},{"../../utilities/approximate":76,"../../utilities/facet":79,"../../utilities/vertices":86,"../edge":42,"../facet":44,"../normal":48,"../vertex":49}],46:[function(require,module,exports){
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

},{"../../utilities/approximate":76,"../../utilities/array":77,"../../utilities/facet":79,"../../utilities/texture":84,"../../utilities/vertices":86,"../edge":42,"../facet":44,"../normal":48,"../vertex":49}],47:[function(require,module,exports){
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

},{"../constants":3,"../utilities/array":77,"../utilities/quaternion":82,"../utilities/vertices":86,"./edge/masking":43,"./verticalLine":50}],48:[function(require,module,exports){
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

},{"../maths/vector":27,"../utilities/array":77}],49:[function(require,module,exports){
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

},{"../utilities/rotation":83}],50:[function(require,module,exports){
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

},{"../utilities/array":77,"../utilities/intersection":80,"../utilities/quaternion":82,"../utilities/rotation":83}],51:[function(require,module,exports){
'use strict';

var Element = require('./element'),
    CanvasElement = require('./element/canvas'),
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

  if (firstArgument instanceof CanvasElement) {
    element = firstArgument; ///
  } else if (isSubclassOf(firstArgument, Element)) {
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

},{"./element":4,"./element/canvas":6,"./element/canvas/function":8,"./utilities/array":77}],52:[function(require,module,exports){
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

},{"./utilities/array":77}],53:[function(require,module,exports){
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

},{}],54:[function(require,module,exports){
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

},{"../../renderer/buffers":53}],55:[function(require,module,exports){
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

},{"../../renderer/buffers":53}],56:[function(require,module,exports){
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
            value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
                  var program = this.getProgram();

                  canvas.useProgram(program);

                  this.bindBuffers(canvas);

                  var renderer = this; ///

                  canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

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

},{"../renderer":52,"../renderer/buffers/colour":54,"../renderer/data/colour":58,"../utilities/array":77,"./locations/colour/attribute":61,"./locations/colour/uniform":62,"./source/colour/fragmentShader":66,"./source/colour/vertexShader":67}],57:[function(require,module,exports){
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

},{"../utilities/array":77}],58:[function(require,module,exports){
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

},{"../../renderer/data":57,"../../utilities/array":77}],59:[function(require,module,exports){
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

},{"../../renderer/data":57,"../../utilities/array":77}],60:[function(require,module,exports){
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

},{"../source/lighting":68,"../source/position":69}],61:[function(require,module,exports){
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

},{"../../locations/attribute":60,"../../source/colour/vertexShader":67}],62:[function(require,module,exports){
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

},{"../../locations/uniform":65}],63:[function(require,module,exports){
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

},{"../../locations/attribute":60,"../../source/texture/vertexShader":71}],64:[function(require,module,exports){
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

},{"../../locations/uniform":65,"../../source/texture/fragmentShader":70}],65:[function(require,module,exports){
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

},{"../source/lighting":68,"../source/position":69}],66:[function(require,module,exports){
'use strict';

var fragmentShaderSource = new String('\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ');

module.exports = fragmentShaderSource;

},{}],67:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = new String('\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + lightingSource + '\n      \n        ' + positionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":68,"../../source/position":69}],68:[function(require,module,exports){
'use strict';

var normalMatrixName = 'uNormalMatrix',
    vertexNormalAttributeName = 'aVertexNormal';

var lightingSource = new String('\n  \n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ');

Object.assign(lightingSource, {
  normalMatrixName: normalMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = lightingSource;

},{}],69:[function(require,module,exports){
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

},{}],70:[function(require,module,exports){
'use strict';

var samplerName = 'uSampler',
    fragmentShaderSource = new String('\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ');

Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});

module.exports = fragmentShaderSource;

},{}],71:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = new String('\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + lightingSource + '\n      \n        ' + positionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":68,"../../source/position":69}],72:[function(require,module,exports){
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

},{"../renderer":52,"../renderer/buffers/texture":55,"../renderer/data/texture":59,"./locations/texture/attribute":63,"./locations/texture/uniform":64,"./source/texture/fragmentShader":70,"./source/texture/vertexShader":71}],73:[function(require,module,exports){
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
            value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
                  var program = this.getProgram();

                  canvas.useProgram(program);

                  this.bindBuffers(canvas);

                  var renderer = this; ///

                  canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

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

},{"../../renderer/texture":72,"../../utilities/array":77}],74:[function(require,module,exports){
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
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var _this3 = this;

      var program = this.getProgram();

      canvas.useProgram(program);

      this.bindBuffers(canvas);

      var renderer = this; ///

      canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

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

},{"../../renderer/texture":72,"../../utilities/array":77}],75:[function(require,module,exports){
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

},{}],76:[function(require,module,exports){
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

},{"../constants":3}],77:[function(require,module,exports){
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

},{"necessary":89}],78:[function(require,module,exports){
'use strict';

var constants = require('../constants'),
    matrixMaths = require('../maths/matrix'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR,
    identity4 = matrixMaths.identity4,
    invert4 = matrixMaths.invert4,
    rotate4 = matrixMaths.rotate4,
    translate4 = matrixMaths.translate4,
    transpose4 = matrixMaths.transpose4,
    perspective4 = matrixMaths.perspective4;


function calculateOffsetMatrix(offset) {
  var offsetMatrix = identity4();

  offsetMatrix = translate4(offsetMatrix, offset);

  return offsetMatrix;
}

function calculateRotationMatrix(angles) {
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

function calculatePositionMatrix(distance) {
  var x = 0,
      y = 0,
      z = -distance;

  var positionMatrix = identity4();

  positionMatrix = translate4(positionMatrix, [x, y, z]);

  return positionMatrix;
}

function calculateProjectionMatrix(width, height) {
  var fieldOfView = FIELD_OF_VIEW,
      aspectRatio = width / height,
      zNear = Z_NEAR,
      zFar = Z_FAR,
      projectionMatrix = perspective4(fieldOfView, aspectRatio, zNear, zFar);

  return projectionMatrix;
}

function calculateNormalMatrix(rotationMatrix) {
  var normalMatrix = invert4(rotationMatrix);

  normalMatrix = transpose4(normalMatrix);

  return normalMatrix;
}

module.exports = {
  calculateOffsetMatrix: calculateOffsetMatrix,
  calculateRotationMatrix: calculateRotationMatrix,
  calculatePositionMatrix: calculatePositionMatrix,
  calculateProjectionMatrix: calculateProjectionMatrix,
  calculateNormalMatrix: calculateNormalMatrix
};

},{"../constants":3,"../maths/matrix":26,"../utilities/array":77}],79:[function(require,module,exports){
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

},{"../constants":3,"../maths/vector":27,"../utilities/array":77}],80:[function(require,module,exports){
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

},{"../maths/vector":27,"../utilities/approximate":76,"../utilities/array":77}],81:[function(require,module,exports){
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

},{"../maths/vector":27}],82:[function(require,module,exports){
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

},{"../maths/vector":27,"../utilities/angle":75,"../utilities/approximate":76,"../utilities/array":77}],83:[function(require,module,exports){
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

},{"../utilities/quaternion":82}],84:[function(require,module,exports){
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

},{"../maths/matrix":26,"../maths/vector":27,"../utilities/array":77,"../utilities/quaternion":82,"../utilities/vertices":86}],85:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    matrixMaths = require('../maths/matrix');

var transform4 = vectorMaths.transform4,
    DEGREES_TO_RADIANS = constants.DEGREES_TO_RADIANS,
    identity4 = matrixMaths.identity4,
    scale4 = matrixMaths.scale4,
    rotate4 = matrixMaths.rotate4,
    translate4 = matrixMaths.translate4;


var xAxis = [1, 0, 0],
    yAxis = [0, 1, 0],
    zAxis = [0, 0, 1],
    defaultScale = [1, 1, 1],
    defaultPosition = [0, 0, 0],
    defaultRotations = [0, 0, 0];

function composeTransform(scale, position, rotations) {
  scale = composeScale(scale); ///

  var rotate = composeRotate(rotations),
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
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultScale;

  var matrix = identity4();

  matrix = scale4(matrix, scale);

  return compose(matrix);
}

function composeRotate() {
  var rotations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRotations;

  var matrix = identity4();

  var xAngle = rotations[0] * DEGREES_TO_RADIANS,
      ///
  yAngle = rotations[1] * DEGREES_TO_RADIANS,
      ///
  zAngle = rotations[2] * DEGREES_TO_RADIANS; ///

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

},{"../constants":3,"../maths/matrix":26,"../maths/vector":27}],86:[function(require,module,exports){
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

},{}],87:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

},{"./react":51}],88:[function(require,module,exports){

},{}],89:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  templateUtilities: require('./lib/utilities/template'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous'),
  miscellaneousUtilities: require('./lib/utilities/miscellaneous')
};

},{"./lib/utilities/array":90,"./lib/utilities/asynchronous":91,"./lib/utilities/fileSystem":92,"./lib/utilities/miscellaneous":93,"./lib/utilities/path":99,"./lib/utilities/template":100}],90:[function(require,module,exports){
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

},{}],91:[function(require,module,exports){
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

},{}],92:[function(require,module,exports){
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

},{"fs":88}],93:[function(require,module,exports){
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

},{"./miscellaneous/ajax":94,"./miscellaneous/log":95,"./miscellaneous/onETX":96,"./miscellaneous/prompt":97,"./miscellaneous/rc":98}],94:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
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

},{"../../utilities/array":90,"../../utilities/fileSystem":92,"../../utilities/path":99,"path":101}],96:[function(require,module,exports){
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

},{"_process":102}],97:[function(require,module,exports){
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

},{"../../utilities/asynchronous":91,"./onETX":96,"_process":102}],98:[function(require,module,exports){
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

},{"../../utilities/array":90,"../../utilities/fileSystem":92,"path":101}],99:[function(require,module,exports){
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

},{"./array":90}],100:[function(require,module,exports){
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

},{"../utilities/fileSystem":92}],101:[function(require,module,exports){
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

},{"_process":102}],102:[function(require,module,exports){
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

},{}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImVzNi9jYW52YXMuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2VsZW1lbnQuanMiLCJlczYvZWxlbWVudC9jYW1lcmEuanMiLCJlczYvZWxlbWVudC9jYW52YXMuanMiLCJlczYvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCJlczYvZWxlbWVudC9jYW52YXMvZnVuY3Rpb24uanMiLCJlczYvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCJlczYvZWxlbWVudC9tYXNrLmpzIiwiZXM2L2VsZW1lbnQvcGFydC5qcyIsImVzNi9lbGVtZW50L3NjZW5lLmpzIiwiZXM2L2V4YW1wbGUuanMiLCJlczYvZXhhbXBsZS9jdWJlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9jb2xvdXJlZFNxdWFyZS5qcyIsImVzNi9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyIsImVzNi9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsImVzNi9leGFtcGxlL2VsZW1lbnQvcHlyYW1pZC5qcyIsImVzNi9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsImVzNi9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwiZXM2L2V4YW1wbGUvbWFza2luZy5qcyIsImVzNi9leGFtcGxlL3B5cmFtaWQuanMiLCJlczYvZXhhbXBsZS9zaW1wbGUuanMiLCJlczYvZXhhbXBsZS90aWxpbmcuanMiLCJlczYvbWF0aHMvbWF0cml4LmpzIiwiZXM2L21hdGhzL3ZlY3Rvci5qcyIsImVzNi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb24uanMiLCJlczYvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCJlczYvbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cy5qcyIsImVzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyIsImVzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCJlczYvbWlzY2VsbGFuZW91cy96b29tLmpzIiwiZXM2L21peGluL2JsZW5kaW5nLmpzIiwiZXM2L21peGluL2J1ZmZlci5qcyIsImVzNi9taXhpbi9jb2xvdXIuanMiLCJlczYvbWl4aW4vZGVwdGguanMiLCJlczYvbWl4aW4vbWF0cml4LmpzIiwiZXM2L21peGluL3Byb2dyYW0uanMiLCJlczYvbWl4aW4vc2hhZGVyLmpzIiwiZXM2L21peGluL3RleHR1cmUuanMiLCJlczYvcHJpbWl0aXZlL2VkZ2UuanMiLCJlczYvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsImVzNi9wcmltaXRpdmUvZmFjZXQuanMiLCJlczYvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwiZXM2L3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsImVzNi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwiZXM2L3ByaW1pdGl2ZS9ub3JtYWwuanMiLCJlczYvcHJpbWl0aXZlL3ZlcnRleC5qcyIsImVzNi9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwiZXM2L3JlYWN0LmpzIiwiZXM2L3JlbmRlcmVyLmpzIiwiZXM2L3JlbmRlcmVyL2J1ZmZlcnMuanMiLCJlczYvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCJlczYvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwiZXM2L3JlbmRlcmVyL2NvbG91ci5qcyIsImVzNi9yZW5kZXJlci9kYXRhLmpzIiwiZXM2L3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiLCJlczYvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyLmpzIiwiZXM2L3JlbmRlcmVyL3RleHR1cmUuanMiLCJlczYvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsImVzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsImVzNi91dGlsaXRpZXMvYW5nbGUuanMiLCJlczYvdXRpbGl0aWVzL2FwcHJveGltYXRlLmpzIiwiZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsImVzNi91dGlsaXRpZXMvY2FtZXJhLmpzIiwiZXM2L3V0aWxpdGllcy9mYWNldC5qcyIsImVzNi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uLmpzIiwiZXM2L3V0aWxpdGllcy9taWRQb2ludC5qcyIsImVzNi91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsImVzNi91dGlsaXRpZXMvcm90YXRpb24uanMiLCJlczYvdXRpbGl0aWVzL3RleHR1cmUuanMiLCJlczYvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsImVzNi91dGlsaXRpZXMvdmVydGljZXMuanMiLCJlczYveGdsLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL2FqYXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9sb2cuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9ub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9vbkVUWC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL25vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3Byb21wdC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3JjLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3BhdGguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvdGVtcGxhdGUuanMiLCJub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTs7Ozs7O0FBRUEsSUFBTSxhQUFhLFFBQVEsZUFBUixDQUFuQjtBQUFB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LFNBQU8sV0FBUDtBQUNEOzs7O0FDdkREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2xpYi94Z2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENhbnZhczogcmVxdWlyZSgnLi9saWIvY2FudmFzJyksXG4gIE1hc2s6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvbWFzaycpLFxuICBQYXJ0OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3BhcnQnKSxcbiAgU2NlbmU6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc2NlbmUnKSxcbiAgQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYScpLFxuICBDYW52YXNFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbnZhcycpLFxuICBDb2xvdXJlZENhbnZhc0VsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyksXG4gIFRleHR1cmVkQ2FudmFzRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZGVwdGgnKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9jb2xvdXInKSxcbiAgICAgIHNoYWRlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9zaGFkZXInKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9idWZmZXInKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tYXRyaXgnKSxcbiAgICAgIHByb2dyYW1NaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcHJvZ3JhbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi90ZXh0dXJlJyksXG4gICAgICBibGVuZGluZ01peGluID0gcmVxdWlyZSgnLi9taXhpbi9ibGVuZGluZycpO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdjYW52YXMnKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTsgfVxuXG4gIHNldFZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHsgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpOyB9XG5cbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7IHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpOyB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB0aGlzLnNldFZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldE1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFpfRkFSID0gMTAwMCxcbiAgICAgIFpfTkVBUiA9IDEsXG4gICAgICBNT1VTRV9VUCA9ICdNT1VTRV9VUCcsXG4gICAgICBNT1VTRV9ET1dOID0gJ01PVVNFX0RPV04nLFxuICAgICAgTU9VU0VfTU9WRSA9ICdNT1VTRV9NT1ZFJyxcbiAgICAgIE1PVVNFX1dIRUVMID0gJ01PVVNFX1dIRUVMJyxcbiAgICAgIENUUkxfS0VZX0NPREUgPSAxNyxcbiAgICAgIFNISUZUX0tFWV9DT0RFID0gMTYsXG4gICAgICBWRVJUSUNFU19MRU5HVEggPSAzLFxuICAgICAgTUlOSU1VTV9ESVNUQU5DRSA9IDEsXG4gICAgICBERUdSRUVTX1RPX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgRklFTERfT0ZfVklFVyA9IDQ1ICogREVHUkVFU19UT19SQURJQU5TLFxuICAgICAgQU5HTEVTX1NDQUxBUiA9IDAuMDEsXG4gICAgICBPRkZTRVRfU0NBTEFSID0gMC4yNSxcbiAgICAgIElOSVRJQUxfQU5HTEVTID0gWyAwLCAwIF0sXG4gICAgICBESVNUQU5DRV9TQ0FMQVIgPSAxLjI1LFxuICAgICAgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDEsXG4gICAgICBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTID0gWyAwLCAwIF07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBaX0ZBUixcbiAgWl9ORUFSLFxuICBNT1VTRV9VUCxcbiAgTU9VU0VfRE9XTixcbiAgTU9VU0VfTU9WRSxcbiAgTU9VU0VfV0hFRUwsXG4gIENUUkxfS0VZX0NPREUsXG4gIFNISUZUX0tFWV9DT0RFLFxuICBWRVJUSUNFU19MRU5HVEgsXG4gIE1JTklNVU1fRElTVEFOQ0UsXG4gIERFR1JFRVNfVE9fUkFESUFOUyxcbiAgRklFTERfT0ZfVklFVyxcbiAgQU5HTEVTX1NDQUxBUixcbiAgT0ZGU0VUX1NDQUxBUixcbiAgSU5JVElBTF9BTkdMRVMsXG4gIERJU1RBTkNFX1NDQUxBUixcbiAgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IsXG4gIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuICBcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICAgIHRoaXMuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dCwgY29udGV4dCk7XG5cbiAgICBkZWxldGUgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2xhc3MoLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGFwcGx5UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gZWxlbWVudC51cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCkpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgUGFuID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIEtleUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMnKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVPZmZzZXRNYXRyaXgsIGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4LCBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeCwgY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCwgY2FsY3VsYXRlTm9ybWFsTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1LFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSBbIDAsIDAsIDAgXTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCwgem9vbSwga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5wYW4uc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMudGlsdC5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VEb3duSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VEb3duSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLnRpbHQubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnBhbi5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCB0aGlzLnRpbHQpO1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKGNhbnZhcykge1xuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICBvblVwZGF0ZSh1cGRhdGVIYW5kbGVyKSB7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuICBcbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IGNhbGN1bGF0ZU9mZnNldE1hdHJpeChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gY2FsY3VsYXRlUm90YXRpb25NYXRyaXgoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4KGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBjYWxjdWxhdGVOb3JtYWxNYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIHRoaXMudXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgb25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGVcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAga2V5RXZlbnRzLmFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG5cbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcblxuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGtleUV2ZW50cyA9IG51bGwsIC8vL1xuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFzayA9IG1hc2s7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXNBbmRNYXNrcygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zLCBtYXNrID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBpbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91ciksXG4gICAgICAgICAgICAgICAgICBmYWNldCA9IGNvbG91cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgIH0pO1xuXG4gICAgY29sb3VyZWRDYW52YXNFbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIucmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRleHR1cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IGluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5tYXAoKGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSxcbiAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXh0dXJlZENhbnZhc0VsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzKCkpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcycpLFxuICAgICAgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwJyk7XG5cbmNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTsgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXApIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LnJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gcmVzaXplSGFuZGxlcjtcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGRvbmUpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZShyZXNpemVIYW5kbGVyKTtcblxuICAgIHRoaXMub25VcGRhdGUodXBkYXRlSGFuZGxlcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmluaXRpYWxpc2UodGhpcy5jYW52YXMpKTtcblxuICAgIHRoaXMucmVzaXplSGFuZGxlcigpOyAvLy9cblxuICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZS9jdWJlJyksXG4gICAgICBzaW1wbGVFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlL3NpbXBsZScpLFxuICAgICAgbWFza2luZ0V4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUvbWFza2luZycpLFxuICAgICAgcHlyYW1pZEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUvcHlyYW1pZCcpLFxuICAgICAgdGlsaW5nRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZS90aWxpbmcnKTtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlICdzaW1wbGUnOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlICdjdWJlJzpcbiAgICBjdWJlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgJ21hc2tpbmcnOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSAncHlyYW1pZCc6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlICd0aWxpbmcnOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTsgLy8vXG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY3ViZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIENhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT5cblxuXHQ8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuXHRcdDxQYXJ0PlxuXHRcdFx0PEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cblx0XHQ8L1BhcnQ+XG5cdFx0PENhbWVyYSAvPlxuXHQ8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViZUV4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2luZGV4Jyk7ICAvLy9cblxuY29uc3QgeyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSA9IHhnbDtcblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFNxdWFyZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZSA9IHJlcXVpcmUoJy4vZmFjZScpO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vY29sb3VyZWRTcXVhcmUnKTtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGYWNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWRlID0gcmVxdWlyZSgnLi9zaWRlJyk7XG5cbmNvbnN0IFB5cmFtaWQgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxTaWRlIC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgIDkwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMTgwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMjcwLCAwIF19IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFB5cmFtaWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkVHJpYW5nbGUgPSByZXF1aXJlKCcuL3RleHR1cmVkVHJpYW5nbGUnKTtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpOyAgLy8vXG5cbmNvbnN0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gPSB4Z2w7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRRdWFkcmFuZ2xlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpOyAgLy8vXG5cbmNvbnN0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gPSB4Z2w7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgICAwLCAwLCAwIF0sXG4gICAgICAgIFsgICAxLCAwLCAwIF0sXG4gICAgICAgIFsgMC41LCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwic3RyaXBlcy5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMC41LCAxIF0gXSxcblxuICAgICAgXTtcblxuY2xhc3MgVGV4dHVyZWRUcmlhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRUcmlhbmdsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTsgLy8vXG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY3ViZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIENhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPVxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS80LCAxLzQsIDEvNCBdfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgc21hbGxDdWJlTWFzayA9XG5cbiAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgIDxTbWFsbEN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBNZWRpdW1DdWJlID1cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFzaz17c21hbGxDdWJlTWFza30gLz5cblxuICAgICAgICAsXG4gICAgICAgIG1lZGl1bUN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPE1lZGl1bUN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBMYXJnZUN1YmUgPVxuXG4gICAgICAgICAgPEN1YmUgbWFzaz17bWVkaXVtQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxMYXJnZUN1YmUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxDYW1lcmEgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpOyAvLy9cblxuY29uc3QgUHlyYW1pZCA9IHJlcXVpcmUoJy4vZWxlbWVudC9weXJhbWlkJyksXG4gICAgICBjb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9jb25maWd1cmF0aW9uJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgQ2FtZXJhIH0gPSB4Z2w7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+IHtcbiAgICBjb25zdCB7IGltYWdlTWFwSlNPTiB9ID0gY29uZmlndXJhdGlvbjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gZG9uZT17ZG9uZX0+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPENhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBweXJhbWlkRXhhbXBsZTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgaW1hZ2VNYXBVUkkgfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGltYWdlTWFwID0gbmV3IEltYWdlKCksXHQvLy9cbiAgICAgICAgc3JjID0gaW1hZ2VNYXBVUkk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGltYWdlTWFwLCB7XG4gICAgc3JjLFxuICAgIG9ubG9hZFxuICB9KTtcblxuICBmdW5jdGlvbiBvbmxvYWQoZXZlbnQpIHtcbiAgICBjYWxsYmFjayhpbWFnZU1hcCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9uZSgpIHtcbiAgY29uc29sZS5sb2coJ0RvbmUhJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7IC8vL1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIENhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPENhbWVyYSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltcGxlRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSwgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbicpLFxuICAgICAgQ29sb3VyZWRTcXVhcmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUnKSxcbiAgICAgIFRleHR1cmVkUXVhZHJhbmdsZSA9IHJlcXVpcmUoJy4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBNYXNrLCBDYW1lcmEgfSA9IHhnbCxcbiAgICAgIHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpLFxuICAgICAgbWFzayA9XG5cbiAgICAgICAgPE1hc2s+XG4gICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwIF19IC8+XG4gICAgICAgIDwvTWFzaz5cblxuICAgICAgO1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCB7IGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gIHByZWxvYWRJbWFnZXMoaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIChpbWFnZXMpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9IGRvbmU9e2RvbmV9PlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9eydmbG9vcmJvYXJkcy5qcGcnfSBtYXNrPXttYXNrfSAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9eydwYXZpbmcuanBnJ30gbWFzaz17bWFza30gLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8Q2FtZXJhIC8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbGluZ0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgc3JjID0gYCR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWA7XG5cbiAgICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9uZSgpIHtcbiAgY29uc29sZS5sb2coJ0RvbmUhJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGlkZW50aXR5MigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLFxuICAgIDAsIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5MygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLCAwLFxuICAgIDAsIDEsIDAsXG4gICAgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGludmVydDIobWF0cml4KSB7XG4gIGNvbnN0IG0wID0gbWF0cml4WzBdLFxuICAgICAgICBtMSA9IG1hdHJpeFsxXSxcbiAgICAgICAgbTIgPSBtYXRyaXhbMl0sXG4gICAgICAgIG0zID0gbWF0cml4WzNdLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAgKiBtMyAtIG0yICogbTE7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgICttMyAvIGRldGVybWluYW50LFxuICAgICAgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAtbTIgLyBkZXRlcm1pbmFudCxcbiAgICAgICttMCAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgYTAwID0gbWF0cml4WzBdLCBhMDEgPSBtYXRyaXhbMV0sIGEwMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgYTEwID0gbWF0cml4WzNdLCBhMTEgPSBtYXRyaXhbNF0sIGExMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgYTIwID0gbWF0cml4WzZdLCBhMjEgPSBtYXRyaXhbN10sIGEyMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjEsXG4gICAgICAgIGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjAsXG4gICAgICAgIGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcblxuICBpZiAoZGV0ZXJtaW5hbnQgIT09IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgYjAxIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoLWEyMiAqIGEwMSArIGEwMiAqIGEyMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICBiMTEgLyBkZXRlcm1pbmFudCxcbiAgICAgIChhMjIgKiBhMDAgLSBhMDIgKiBhMjApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LFxuICAgICAgKC1hMjEgKiBhMDAgKyBhMDEgKiBhMjApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoYTExICogYTAwIC0gYTAxICogYTEwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgYTAwID0gbWF0cml4WyAwXSwgYTAxID0gbWF0cml4WyAxXSwgYTAyID0gbWF0cml4WyAyXSwgYTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgYTEwID0gbWF0cml4WyA0XSwgYTExID0gbWF0cml4WyA1XSwgYTEyID0gbWF0cml4WyA2XSwgYTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgYTIwID0gbWF0cml4WyA4XSwgYTIxID0gbWF0cml4WyA5XSwgYTIyID0gbWF0cml4WzEwXSwgYTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgYTMwID0gbWF0cml4WzEyXSwgYTMxID0gbWF0cml4WzEzXSwgYTMyID0gbWF0cml4WzE0XSwgYTMzID0gbWF0cml4WzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAvIGRldGVybWluYW50LFxuICAgICAgKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAvIGRldGVybWluYW50LFxuICAgICAgKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgLyBkZXRlcm1pbmFudCxcbiAgICAgIChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAvIGRldGVybWluYW50LFxuICAgICAgKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAvIGRldGVybWluYW50LFxuICAgICAgKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAvIGRldGVybWluYW50LFxuICAgICAgKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgLyBkZXRlcm1pbmFudCxcbiAgICAgIChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNwb3NlMihtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0sIG1hdHJpeFsyXSxcbiAgICBtYXRyaXhbMV0sIG1hdHJpeFszXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNwb3NlMyhtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0sIG1hdHJpeFszXSwgbWF0cml4WzZdLFxuICAgIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbN10sXG4gICAgbWF0cml4WzJdLCBtYXRyaXhbNV0sIG1hdHJpeFs4XSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdLCBtYXRyaXhbIDRdLCBtYXRyaXhbIDhdLCBtYXRyaXhbMTJdLFxuICAgIG1hdHJpeFsgMV0sIG1hdHJpeFsgNV0sIG1hdHJpeFsgOV0sIG1hdHJpeFsxM10sXG4gICAgbWF0cml4WyAyXSwgbWF0cml4WyA2XSwgbWF0cml4WzEwXSwgbWF0cml4WzE0XSxcbiAgICBtYXRyaXhbIDNdLCBtYXRyaXhbIDddLCBtYXRyaXhbMTFdLCBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzY2FsZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4LFxuICAgIG1hdHJpeFsgMV0gKiB4LFxuICAgIG1hdHJpeFsgMl0gKiB4LFxuICAgIG1hdHJpeFsgM10gKiB4LFxuXG4gICAgbWF0cml4WyA0XSAqIHksXG4gICAgbWF0cml4WyA1XSAqIHksXG4gICAgbWF0cml4WyA2XSAqIHksXG4gICAgbWF0cml4WyA3XSAqIHksXG5cbiAgICBtYXRyaXhbIDhdICogeixcbiAgICBtYXRyaXhbIDldICogeixcbiAgICBtYXRyaXhbMTBdICogeixcbiAgICBtYXRyaXhbMTFdICogeixcblxuICAgIG1hdHJpeFsxMl0sXG4gICAgbWF0cml4WzEzXSxcbiAgICBtYXRyaXhbMTRdLFxuICAgIG1hdHJpeFsxNV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcbiAgICAgICAgICBhMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICAgIGEwMSA9IG1hdHJpeFsgMV0sXG4gICAgICAgICAgYTAyID0gbWF0cml4WyAyXSxcbiAgICAgICAgICBhMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICAgIGExMCA9IG1hdHJpeFsgNF0sXG4gICAgICAgICAgYTExID0gbWF0cml4WyA1XSxcbiAgICAgICAgICBhMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICAgIGExMyA9IG1hdHJpeFsgN10sXG4gICAgICAgICAgYTIwID0gbWF0cml4WyA4XSxcbiAgICAgICAgICBhMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICAgIGEyMiA9IG1hdHJpeFsxMF0sXG4gICAgICAgICAgYTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgICBiMDAgPSB4ICogeCAqIHQgKyBjLFxuICAgICAgICAgIGIwMSA9IHkgKiB4ICogdCArIHogKiBzLFxuICAgICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLFxuICAgICAgICAgIGIxMSA9IHkgKiB5ICogdCArIGMsXG4gICAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsXG4gICAgICAgICAgYjIxID0geSAqIHogKiB0IC0geCAqIHMsXG4gICAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDIsXG4gICAgICBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDIsXG4gICAgICBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDIsXG4gICAgICBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDIsXG4gICAgICBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTIsXG4gICAgICBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTIsXG4gICAgICBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTIsXG4gICAgICBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTIsXG4gICAgICBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjIsXG4gICAgICBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjIsXG4gICAgICBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjIsXG4gICAgICBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjIsXG4gICAgICBtYXRyaXhbMTJdLFxuICAgICAgbWF0cml4WzEzXSxcbiAgICAgIG1hdHJpeFsxNF0sXG4gICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBsZXQgeCA9IHZlY3RvclswXSxcbiAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgYTAwID0gbWF0cml4WzBdLFxuICAgICAgYTAxID0gbWF0cml4WzFdLFxuICAgICAgYTAyID0gbWF0cml4WzJdLFxuICAgICAgYTAzID0gbWF0cml4WzNdLFxuICAgICAgYTEwID0gbWF0cml4WzRdLFxuICAgICAgYTExID0gbWF0cml4WzVdLFxuICAgICAgYTEyID0gbWF0cml4WzZdLFxuICAgICAgYTEzID0gbWF0cml4WzddLFxuICAgICAgYTIwID0gbWF0cml4WzhdLFxuICAgICAgYTIxID0gbWF0cml4WzldLFxuICAgICAgYTIyID0gbWF0cml4WzEwXSxcbiAgICAgIGEyMyA9IG1hdHJpeFsxMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMDAsXG4gICAgYTAxLFxuICAgIGEwMixcbiAgICBhMDMsXG4gICAgYTEwLFxuICAgIGExMSxcbiAgICBhMTIsXG4gICAgYTEzLFxuICAgIGEyMCxcbiAgICBhMjEsXG4gICAgYTIyLFxuICAgIGEyMyxcbiAgICBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBtYXRyaXhbMTJdLFxuICAgIGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIG1hdHJpeFsxM10sXG4gICAgYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgbWF0cml4WzE0XSxcbiAgICBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcikge1xuICBjb25zdCBmID0gMS4wIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG59XG5cbmZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0pOyB9XG5cbmZ1bmN0aW9uIGRvdDModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0gKyB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSk7IH1cblxuZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdICsgdmVjdG9yQVszXSAqIHZlY3RvckJbM10pOyB9XG5cbmZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IGF4ID0gdmVjdG9yQVswXSwgYXkgPSB2ZWN0b3JBWzFdLCBheiA9IHZlY3RvckFbMl0sXG4gICAgICAgIGJ4ID0gdmVjdG9yQlswXSwgYnkgPSB2ZWN0b3JCWzFdLCBieiA9IHZlY3RvckJbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBheSAqIGJ6IC0gYXogKiBieSxcbiAgICBheiAqIGJ4IC0gYXggKiBieixcbiAgICBheCAqIGJ5IC0gYXkgKiBieCxcblxuICBdKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTModmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcbiAgICAgIHcgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzNdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGFkZDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKyB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gLSB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKiB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtMyh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFszXSAqIHkgKyBtYXRyaXhbNl0gKiB6LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzddICogeixcbiAgICBtYXRyaXhbMl0gKiB4ICsgbWF0cml4WzVdICogeSArIG1hdHJpeFs4XSAqIHosXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTQodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4ICsgbWF0cml4WyA0XSAqIHkgKyBtYXRyaXhbIDhdICogeiArIG1hdHJpeFsxMl0gKiB3LFxuICAgIG1hdHJpeFsgMV0gKiB4ICsgbWF0cml4WyA1XSAqIHkgKyBtYXRyaXhbIDldICogeiArIG1hdHJpeFsxM10gKiB3LFxuICAgIG1hdHJpeFsgMl0gKiB4ICsgbWF0cml4WyA2XSAqIHkgKyBtYXRyaXhbMTBdICogeiArIG1hdHJpeFsxNF0gKiB3LFxuICAgIG1hdHJpeFsgM10gKiB4ICsgbWF0cml4WyA3XSAqIHkgKyBtYXRyaXhbMTFdICogeiArIG1hdHJpeFsxNV0gKiB3LFxuXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGVuZ3RoMixcbiAgbGVuZ3RoMyxcbiAgbGVuZ3RoNCxcbiAgZG90MixcbiAgZG90MyxcbiAgZG90NCxcbiAgY3Jvc3MzLFxuICBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5fX2NvbmZpZ3VyYXRpb25fXzsgLy8vXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IENUUkxfS0VZX0NPREUsIFNISUZUX0tFWV9DT0RFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBjdHJsS2V5RG93biwgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMuY3RybEtleURvd24gPSBjdHJsS2V5RG93bjtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzQ3RybEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3RybEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBDVFJMX0tFWV9DT0RFIDpcbiAgICAgICAgdGhpcy5jdHJsS2V5VXBFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNISUZUX0tFWV9DT0RFIDpcbiAgICAgICAgdGhpcy5zaGlmdEtleVVwRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIENUUkxfS0VZX0NPREUgOlxuICAgICAgICB0aGlzLmN0cmxLZXlEb3duRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTSElGVF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuc2hpZnRLZXlEb3duRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIGN0cmxLZXlVcEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jdHJsS2V5RG93biA9IGZhbHNlO1xuXG4gICAgY29uc3QgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5mb3JFYWNoKChjdHJsS2V5SGFuZGxlcikgPT4gY3RybEtleUhhbmRsZXIodGhpcy5jdHJsS2V5RG93bikpO1xuICB9XG5cbiAgc2hpZnRLZXlVcEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaCgoc2hpZnRLZXlIYW5kbGVyKSA9PiBzaGlmdEtleUhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGN0cmxLZXlEb3duRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmN0cmxLZXlEb3duID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaCgoY3RybEtleUhhbmRsZXIpID0+IGN0cmxLZXlIYW5kbGVyKHRoaXMuY3RybEtleURvd24pKTtcbiAgfVxuXG4gIHNoaWZ0S2V5RG93bkV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKChzaGlmdEtleUhhbmRsZXIpID0+IHNoaWZ0S2V5SGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgYWRkQ3RybEtleUhhbmRsZXIoY3RybEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBDVFJMX0tFWV9DT0RFIF07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMucHVzaChjdHJsS2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFNISUZUX0tFWV9DT0RFIF07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLnB1c2goc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9O1xuICAgIFxuICAgIGhhbmRsZXJzTWFwWyBDVFJMX0tFWV9DT0RFIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgU0hJRlRfS0VZX0NPREUgXSA9IFtdO1xuXG4gICAgY29uc3QgY3RybEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVyc01hcCwgY3RybEtleURvd24sIHNoaWZ0S2V5RG93biksXG4gICAgICAgICAga2V5VXBFdmVudExpc3RlbmVyID0ga2V5RXZlbnRzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKGtleUV2ZW50cyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSBrZXlFdmVudHMua2V5RG93bkV2ZW50TGlzdGVuZXIuYmluZChrZXlFdmVudHMpLFxuICAgICAgICAgIGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBFdmVudExpc3RlbmVyKTtcbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZXlFdmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQsIHRoaXMuY2FudmFzKTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24sIHRoaXMuY2FudmFzKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX01PVkUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGRlbHRhRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF07XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKGRlbHRhLCB0aGlzLmNhbnZhcykpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9O1xuXG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXSA9IFtdO1xuICAgIGhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdID0gW107XG5cbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcyksXG4gICAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG5cdFx0XHRcdFx0bW91c2VVcEV2ZW50TGlzdGVuZXIgPSBtb3VzZUV2ZW50cy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZURvd25FdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lciA9IG1vdXNlRXZlbnRzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQobW91c2VFdmVudHMpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGV2ZW50LnRhcmdldCwgIC8vL1xuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IE9GRlNFVF9TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHByZXZpb3VzT2Zmc2V0O1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcblxuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcblxuICAgIGlmICh0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCB0aWx0KSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmIChtb3VzZURvd24gJiYgc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldCh0aWx0KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPZmZzZXQodGlsdCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldCA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpLFxuICAgICAgICAgIHhBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgdGhpcy5vZmZzZXQgPSBhZGQzKGFkZDModGhpcy5wcmV2aW91c09mZnNldCwgeUFuZ2xlT2Zmc2V0KSwgeEFuZ2xlT2Zmc2V0KTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBwcmV2aW91c09mZnNldCA9IG9mZnNldCwgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLCAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVlBbmdsZU9mZnNldCh5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0KSB7XG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50cyA9IHJlbGF0aXZlT2Zmc2V0LCAgLy8vXG4gICAgICAgIGZpcnN0UmVsYXRpdmVPZmZzZXRDb21wb25lbnQgPSBmaXJzdChyZWxhdGl2ZU9mZnNldENvbXBvbmVudHMpLFxuICAgICAgICB5QW5nbGVPZmZzZXQgPSBbXG4gICAgICAgICAgLU1hdGguY29zKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICAgICswLFxuICAgICAgICAgIC1NYXRoLnNpbih5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldENvbXBvbmVudFxuICAgICAgICBdO1xuXG4gIHJldHVybiB5QW5nbGVPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVhBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpIHtcbiAgY29uc3QgcmVsYXRpdmVPZmZzZXRDb21wb25lbnRzID0gcmVsYXRpdmVPZmZzZXQsICAvLy9cbiAgICAgICAgc2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnQgPSBzZWNvbmQocmVsYXRpdmVPZmZzZXRDb21wb25lbnRzKSxcbiAgICAgICAgeEFuZ2xlT2Zmc2V0ID0gW1xuICAgICAgICAgIC1NYXRoLnNpbih4QW5nbGUpICogTWF0aC5zaW4oeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICAgIC1NYXRoLmNvcyh4QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnQsXG4gICAgICAgICAgK01hdGguc2luKHhBbmdsZSkgKiBNYXRoLmNvcyh5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4geEFuZ2xlT2Zmc2V0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQyLCBzY2FsZTIsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IEFOR0xFU19TQ0FMQVIsIElOSVRJQUxfQU5HTEVTLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihhbmdsZXMsIHByZXZpb3VzQW5nbGVzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gcHJldmlvdXNBbmdsZXM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeEFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gLWZpcnN0QW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkgeyAvLy9cbiAgICBjb25zdCB4QW5nbGUgPSB0aGlzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRoaXMuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgekFuZ2xlID0gdGhpcy5nZXRaQW5nbGUoKSxcbiAgICAgICAgICBhbmdsZXMgPSBbXG4gICAgICAgICAgICB4QW5nbGUsXG4gICAgICAgICAgICB5QW5nbGUsXG4gICAgICAgICAgICB6QW5nbGVcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiBhbmdsZXM7XG4gIH1cbiAgXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmIChtb3VzZURvd24gJiYgIXNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZXMoKTtcbiAgICB9XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKCFzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSB0aGlzLmFuZ2xlcztcblxuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIGNvbnN0IHNjYWxhciA9IEFOR0xFU19TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMih0aGlzLnByZXZpb3VzQW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICAgcHJldmlvdXNBbmdsZXMgPSBhbmdsZXMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IERJU1RBTkNFX1NDQUxBUiwgTUlOSU1VTV9ESVNUQU5DRSB9ID0gY29uc3RhbnRzOyBcblxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gRElTVEFOQ0VfU0NBTEFSO1xuICAgIFxuICAgIHRoaXMuZGlzdGFuY2UgLT0gZGVsdGEgKiBzY2FsYXI7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoTUlOSU1VTV9ESVNUQU5DRSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWm9vbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVuYWJsZUJsZW5kaW5nXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXIsXG4gIGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXIsXG4gIGJpbmRCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRSID0gMC4wLFxuICAgICAgZGVmYXVsdEcgPSAwLjAsXG4gICAgICBkZWZhdWx0QiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihyID0gZGVmYXVsdFIsIGcgPSBkZWZhdWx0RywgYiA9IGRlZmF1bHRCLCBhID0gZGVmYXVsdEEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHREZXB0aCA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyBcbiAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlNYXRyaXhcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCkge1xuICBjb25zdCBleHRlbnNpb24gPSAoXG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbignRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJylcbiAgKTtcblxuICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgeyBURVhUVVJFXzJEIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgeyBNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIH0gPSBleHRlbnNpb24sXG4gICAgICAgICAgbWF4aW11bSA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXIoTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcblxuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJmKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBtYXhpbXVtKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZSxcbiAgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgc3VidHJhY3QzIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBFZGdlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIG1pZFBvaW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50Jyk7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSA9IG1pZFBvaW50VXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vZWRnZScpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4vdmVydGV4JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgbWlkUG9pbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWlkUG9pbnQnKSxcbiAgICAgIGludGVyc2VjdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb24nKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcHVzaCwgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9ID0gbWlkUG9pbnRVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uLCBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucywgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LCBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXggfSA9IGludGVyc2VjdGlvblV0aWxpdGllcztcblxuY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlcyh0aGlzLnZlcnRpY2VzKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0O1xuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbLi4uY29sb3VyLCAxXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZmFjZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZmFjZXQnKSxcbiAgICAgIHRleHR1cmVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdGV4dHVyZScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcyxcbiAgICAgIHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIH0gPSB0ZXh0dXJlVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkRmFjZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgTWFza2luZ0VkZ2UgPSByZXF1aXJlKCcuL2VkZ2UvbWFza2luZycpLFxuICAgICAgVmVydGljYWxMaW5lID0gcmVxdWlyZSgnLi92ZXJ0aWNhbExpbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uJyk7XG5cbmNvbnN0IHsgVkVSVElDRVNfTEVOR1RIIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcm90YXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMubWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzO1xuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHZlcnRpY2FsTGluZXM7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TWFza2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tpbmdFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2FsTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxMaW5lcztcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKTsgIC8vL1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0LmlzTWFza2VkKG1hc2tpbmdGYWNldCk7XG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRNYXNrZWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goKHVubWFza2VkU21hbGxlckZhY2V0KSA9PiB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZS5zcGxpdEZhY2V0cyhmYWNldHMpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGNvbnN0IGZhY2V0Tm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXRWZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXROb3JtYWwsIC8vL1xuICAgICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdFZGdlcyA9IGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGljYWxMaW5lcyA9IG1hc2tpbmdFZGdlcy5tYXAoKG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBWZXJ0aWNhbExpbmUuZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdGYWNldDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JvdGF0aW9uJyk7XG5cbmNvbnN0IHsgcm90YXRlUG9zaXRpb24gfSA9IHJvdGF0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlVHVwbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcm90YXRpb24nKSxcbiAgICAgIHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVhdGVybmlvbicpLFxuICAgICAgaW50ZXJzZWN0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcm90YXRlUG9zaXRpb24gfSA9IHJvdGF0aW9uVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVJbnRlcnNlY3Rpb24gfSA9IGludGVyc2VjdGlvblV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uJyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgQ2FudmFzRWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG4gIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShmdW5jKHByb3BlcnRpZXMpKTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IEZ1bmN0aW9uQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5yZW5kZXJlckRhdGEgPSByZW5kZXJlckRhdGE7XG4gICAgdGhpcy5yZW5kZXJlckJ1ZmZlcnMgPSByZW5kZXJlckJ1ZmZlcnM7XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRGYWNldHMoZmFjZXRzKSB7XG4gICAgYWRkKHRoaXMuZmFjZXRzLCBmYWNldHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuT2JqZWN0LmFzc2lnbihSZW5kZXJlciwge1xuICBjcmVhdGVQcm9ncmFtXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5jbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJCdWZmZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9idWZmZXJzJyk7XG5cbmNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSB2ZXJ0ZXhDb2xvdXJzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckJ1ZmZlcnMsIHZlcnRleENvbG91cnNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2J1ZmZlcnMnKTtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIENvbG91clJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXInKSxcbiAgICAgIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybScpLFxuICAgICAgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q291bnQoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZsYXR0ZW4sIG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvZGF0YScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBtZXJnZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2RhdGEnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSA9IGxpZ2h0aW5nU291cmNlLFxuICAgICAgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXInKTtcblxuY29uc3QgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG5cbmNsYXNzIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL3VuaWZvcm0nKTtcblxuY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKTtcblxuY29uc3QgeyB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZTtcblxuY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybScpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpO1xuXG5jb25zdCB7IHNhbXBsZXJOYW1lIH0gPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcblxuY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgeyBub3JtYWxNYXRyaXhOYW1lIH0gPSBsaWdodGluZ1NvdXJjZSxcbiAgICAgIHsgb2Zmc2V0TWF0cml4TmFtZSwgcm90YXRpb25NYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gPSBwb3NpdGlvblNvdXJjZTtcblxuY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uOyAgICBcbiAgfVxuICBcbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRNYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwcm9qZWN0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxNYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pZm9ybUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhDb2xvdXInLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhOb3JtYWwnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSAoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpICsgMS4wKSAvIDIuMDtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGxpZ2h0aW5nU291cmNlLCB7XG4gIG5vcm1hbE1hdHJpeE5hbWUsXG4gIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpZ2h0aW5nU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBvZmZzZXRNYXRyaXhOYW1lID0gJ3VPZmZzZXRNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHByb2plY3Rpb25NYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJztcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldE1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiAke29mZnNldE1hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHBvc2l0aW9uU291cmNlLCB7XG4gIG9mZnNldE1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lLFxuICBwcm9qZWN0aW9uTWF0cml4TmFtZSxcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lXG59KTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25Tb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhbXBsZXJOYW1lID0gJ3VTYW1wbGVyJyxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihmcmFnbWVudFNoYWRlclNvdXJjZSwge1xuICBzYW1wbGVyTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9kYXRhL3RleHR1cmUnKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZScpLFxuICAgICAgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0nKSxcbiAgICAgIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMuaW1hZ2VNYXBKU09OKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSAtIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUsXG4gIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSA9IGNvbnN0YW50cztcblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAxLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSxcbiAgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm9cbn07XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWVBLCB2YWx1ZUIsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikge1xuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWVBIC0gdmFsdWVCLFxuICAgICAgICBhYnNvbHV0ZURpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlKSxcbiAgICAgICAgYXBwcm94aW1hdGVseUVxdWFsID0gKGFic29sdXRlRGlmZmVyZW5jZSA8IG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBhcHByb3hpbWF0ZWx5RXF1YWw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3Nhcnk7XG5cbmZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbihhcnJheVV0aWxpdGllcywge1xuICBwZXJtdXRlLFxuICBmbGF0dGVuLFxuICBndWFyYW50ZWVcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIG1hdHJpeE1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0cml4JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRklFTERfT0ZfVklFVywgWl9ORUFSLCBaX0ZBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpZGVudGl0eTQsIGludmVydDQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQsIHRyYW5zcG9zZTQsIHBlcnNwZWN0aXZlNCB9ID0gbWF0cml4TWF0aHM7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldE1hdHJpeChvZmZzZXQpIHtcbiAgbGV0IG9mZnNldE1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIG9mZnNldE1hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0TWF0cml4LCBvZmZzZXQpO1xuXG4gIHJldHVybiBvZmZzZXRNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4KGFuZ2xlcykge1xuICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QoYW5nbGVzKSxcbiAgICAgICAgc2Vjb25kQW5nbGUgPSBzZWNvbmQoYW5nbGVzKSxcbiAgICAgICAgdGhpcmRBbmdsZSA9IHRoaXJkKGFuZ2xlcyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLFxuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlO1xuXG4gIGxldCByb3RhdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIHJvdGF0aW9uTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbk1hdHJpeCwgeEFuZ2xlLCBbMSwgMCwgMF0pO1xuICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25NYXRyaXgsIHlBbmdsZSwgWzAsIDEsIDBdKTtcbiAgcm90YXRpb25NYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uTWF0cml4LCB6QW5nbGUsIFswLCAwLCAxXSk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeChkaXN0YW5jZSkge1xuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4KHdpZHRoLCBoZWlnaHQpIHtcbiAgY29uc3QgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLFxuICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICB6TmVhciA9IFpfTkVBUixcbiAgICAgICAgekZhciA9IFpfRkFSLFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWxNYXRyaXgocm90YXRpb25NYXRyaXgpIHtcbiAgbGV0IG5vcm1hbE1hdHJpeCA9IGludmVydDQocm90YXRpb25NYXRyaXgpO1xuXG4gIG5vcm1hbE1hdHJpeCA9IHRyYW5zcG9zZTQobm9ybWFsTWF0cml4KTtcblxuICByZXR1cm4gbm9ybWFsTWF0cml4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlT2Zmc2V0TWF0cml4LFxuICBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCxcbiAgY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgsXG4gIGNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgsXG4gIGNhbGN1bGF0ZU5vcm1hbE1hdHJpeFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbGVuZ3RoMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IGVkZ2UuY2xvbmUoKSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjbG9uZU5vcm1hbChub3JtYWwpIHtcbiAgbm9ybWFsID0gbm9ybWFsLmNsb25lKCk7XG4gIFxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5mdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5jbG9uZSgpKTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIGFyZWEgPSBsZW5ndGgzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSkgLyAyO1xuXG4gIHJldHVybiBhcmVhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xvbmVFZGdlcyxcbiAgY2xvbmVOb3JtYWwsXG4gIGNsb25lVmVydGljZXMsXG4gIGNhbGN1bGF0ZUVkZ2VzLFxuICBjYWxjdWxhdGVOb3JtYWwsXG4gIGNhbGN1bGF0ZUFyZWFcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBhZGQzLCBzdWJ0cmFjdDMsIHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGxldCBpbnRlcnNlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICBjb25zdCBlZGdlSW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoZWRnZUludGVyc2VjdGlvbiA+IDAgKSAmJiAoZWRnZUludGVyc2VjdGlvbiA8IDEpKTtcblxuICAgIGlmIChlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikgPT4ge1xuICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbikge1xuICBjb25zdCBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4UG9zaXRpb24sIHN0YXJ0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZXh0ZW50LCBpbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGFkZDMoc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbixcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyBhZGQzLCBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb24gPSB2ZXJ0aWNlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb24sIHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2NhbGVkVmVydGV4UG9zaXRpb24gPSBzY2FsZTModmVydGV4UG9zaXRpb24sIDEvMyk7XG5cbiAgICBtaWRQb2ludFBvc2l0aW9uID0gYWRkMyhtaWRQb2ludFBvc2l0aW9uLCBzY2FsZWRWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbiAgfSwgWyAwLCAwLCAwIF0pO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbixcbiAgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSxcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXNcbn07XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGFuZ2xlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FuZ2xlJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IGRvdDMsIGNyb3NzMywgbm9ybWFsaXNlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lLCBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lIH0gPSBhbmdsZVV0aWxpdGllcztcblxuZnVuY3Rpb24gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pIHsgcmV0dXJuIGhhbWlsdG9uUHJvZHVjdChoYW1pbHRvblByb2R1Y3Qocm90YXRpb25RdWF0ZXJuaW9uLCBpbWFnaW5hcnlRdWF0ZXJuaW9uKSwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcblxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VFeHRlbnQgPSBtYXNraW5nRWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50ID0gbm9ybWFsaXNlMyhtYXNraW5nRWRnZUV4dGVudCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMgPSB1bml0TWFza2luZ0VkZ2VFeHRlbnQsICAvLy9cbiAgICAgICAgZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAoYW5nbGVPZlJvdGF0aW9uU2luZSA+IDAgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1jYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvblxufTtcblxuZnVuY3Rpb24gaGFtaWx0b25Qcm9kdWN0KHF1YXRlcm5pb25BLCBxdWF0ZXJuaW9uQikge1xuICBjb25zdCBhMSA9IHF1YXRlcm5pb25BWzBdLFxuICAgICAgICBiMSA9IHF1YXRlcm5pb25BWzFdLFxuICAgICAgICBjMSA9IHF1YXRlcm5pb25BWzJdLFxuICAgICAgICBkMSA9IHF1YXRlcm5pb25BWzNdLFxuICAgICAgICBhMiA9IHF1YXRlcm5pb25CWzBdLFxuICAgICAgICBiMiA9IHF1YXRlcm5pb25CWzFdLFxuICAgICAgICBjMiA9IHF1YXRlcm5pb25CWzJdLFxuICAgICAgICBkMiA9IHF1YXRlcm5pb25CWzNdLFxuICAgICAgICBhID0gYTEgKiBhMiAtIGIxICogYjIgLSBjMSAqIGMyIC0gZDEgKiBkMixcbiAgICAgICAgYiA9IGExICogYjIgKyBiMSAqIGEyICsgYzEgKiBkMiAtIGQxICogYzIsXG4gICAgICAgIGMgPSBhMSAqIGMyIC0gYjEgKiBkMiArIGMxICogYTIgKyBkMSAqIGIyLFxuICAgICAgICBkID0gYTEgKiBkMiArIGIxICogYzIgLSBjMSAqIGIyICsgZDEgKiBhMixcbiAgICAgICAgcXVhdGVybmlvbiA9IFsgYSwgYiwgYywgZCBdO1xuXG4gIHJldHVybiBxdWF0ZXJuaW9uO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdHJpeE1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0cml4JyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGludmVydDIsIGludmVydDMgfSA9IG1hdHJpeE1hdGhzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcyxcbiAgICAgIHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JNYXRocztcblxuZnVuY3Rpb24gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpKTsgIC8vL1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSkpOyAvLy9cblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIGNvbnN0IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247IC8vL1xuXG4gIGNvbnN0IHRlbXBWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBhcmVudFZlcnRpY2VzID0gcm90YXRlVmVydGljZXMocGFyZW50VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSB0ZW1wVmVydGljZXM7ICAvLy9cblxuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4ID0gZmlyc3QocGFyZW50VmVydGljZXMpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXggPSBzZWNvbmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleCA9IHRoaXJkKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gZmlyc3QodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gc2Vjb25kKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb24gPSBmaXJzdFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uID0gdGhpcmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSMXkgPSBmaXJzdFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFIyeCA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBSM3ggPSB0aGlyZFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIzeSA9IHRoaXJkVmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDN4ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAxeSA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMnkgPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAzeSA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMXUgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMXYgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDJ2ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAzdSA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCA9IGludmVydDMoWyAxLCAxLCAxLCBQMXUsIFAydSwgUDN1LCBQMXYsIFAydiwgUDN2IF0pLFxuICAgICAgICBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF4LCBQMngsIFAzeCBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeSwgUDJ5LCBQM3kgXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgT3ggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgT3kgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCA9IGludmVydDIoWyBVeCwgVXksIFZ4LCBWeSBdKSxcbiAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIxeCAtIE94LCBSMXkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMnggLSBPeCwgUjJ5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IFtcbiAgICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsXG4gIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLFxuICBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL21hdHJpeCcpO1xuXG5jb25zdCB7IHRyYW5zZm9ybTQgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBERUdSRUVTX1RPX1JBRElBTlMgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgaWRlbnRpdHk0LCBzY2FsZTQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQgfSA9IG1hdHJpeE1hdGhzO1xuXG5jb25zdCB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICBkZWZhdWx0U2NhbGUgPSBbIDEsIDEsIDEgXSxcbiAgICAgIGRlZmF1bHRQb3NpdGlvbiA9IFsgMCwgMCwgMCBdLFxuICAgICAgZGVmYXVsdFJvdGF0aW9ucyA9IFsgMCwgMCwgMCBdO1xuXG5mdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSB7XG4gIHNjYWxlID0gY29tcG9zZVNjYWxlKHNjYWxlKTsgIC8vL1xuXG4gIGNvbnN0IHJvdGF0ZSA9IGNvbXBvc2VSb3RhdGUocm90YXRpb25zKSxcbiAgICAgICAgdHJhbnNsYXRlID0gY29tcG9zZVRyYW5zbGF0ZShwb3NpdGlvbik7XG5cbiAgcmV0dXJuICh2ZWN0b3IpID0+IHRyYW5zbGF0ZShyb3RhdGUoc2NhbGUodmVjdG9yKSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb3NlVHJhbnNmb3JtXG59O1xuXG5mdW5jdGlvbiBjb21wb3NlKG1hdHJpeCkge1xuICByZXR1cm4gKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbLi4udmVjdG9yLCAxXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVNjYWxlKHNjYWxlID0gZGVmYXVsdFNjYWxlKSB7XG4gIGxldCBtYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBtYXRyaXggPSBzY2FsZTQobWF0cml4LCBzY2FsZSk7XG5cbiAgcmV0dXJuIGNvbXBvc2UobWF0cml4KTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVJvdGF0ZShyb3RhdGlvbnMgPSBkZWZhdWx0Um90YXRpb25zKSB7XG4gIGxldCBtYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBjb25zdCB4QW5nbGUgPSByb3RhdGlvbnNbIDAgXSAqIERFR1JFRVNfVE9fUkFESUFOUywgLy8vXG4gICAgICAgIHlBbmdsZSA9IHJvdGF0aW9uc1sgMSBdICogREVHUkVFU19UT19SQURJQU5TLCAvLy9cbiAgICAgICAgekFuZ2xlID0gcm90YXRpb25zWyAyIF0gKiBERUdSRUVTX1RPX1JBRElBTlM7IC8vL1xuXG4gIG1hdHJpeCA9IHJvdGF0ZTQobWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgbWF0cml4ID0gcm90YXRlNChtYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICBtYXRyaXggPSByb3RhdGU0KG1hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG5cbiAgcmV0dXJuIGNvbXBvc2UobWF0cml4KTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVRyYW5zbGF0ZShwb3NpdGlvbiA9IGRlZmF1bHRQb3NpdGlvbikge1xuICBsZXQgbWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgbWF0cml4ID0gdHJhbnNsYXRlNChtYXRyaXgsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gY29tcG9zZShtYXRyaXgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByb3RhdGVkVmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRWZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiByb3RhdGVkVmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCkgeyAgLy8vXG4gIGNvbnN0IGluZGV4ZXMgPSBpbmRleFR1cGxlLCAvLy9cbiAgICAgICAgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGUgPSBjb29yZGluYXRlVHVwbGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlVmVydGljZXMsXG4gIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJy4vcmVhY3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG4iLCIiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIHRlbXBsYXRlVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvdGVtcGxhdGUnKSxcbiAgZmlsZVN5c3RlbVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKSxcbiAgYXN5bmNocm9ub3VzVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzJyksXG4gIG1pc2NlbGxhbmVvdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5mdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgYXJyYXkyKSB7XG4gIGlmICghKGFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIGFycmF5MiA9IFthcnJheTJdO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IGFycmF5Mi5sZW5ndGgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdDogZmlyc3QsXG4gIHNlY29uZDogc2Vjb25kLFxuICB0aGlyZDogdGhpcmQsXG4gIGZvdXJ0aDogZm91cnRoLFxuICBmaWZ0aDogZmlmdGgsXG4gIGZpZnRoTGFzdDogZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0OiBmb3VydGhMYXN0LFxuICB0aGlyZExhc3Q6IHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdDogc2Vjb25kTGFzdCxcbiAgbGFzdDogbGFzdCxcbiAgdGFpbDogdGFpbCxcbiAgcHVzaDogcHVzaCxcbiAgdW5zaGlmdDogdW5zaGlmdCxcbiAgY29uY2F0OiBjb25jYXQsXG4gIGNsZWFyOiBjbGVhcixcbiAgY29weTogY29weSxcbiAgbWVyZ2U6IG1lcmdlLFxuICBzcGxpY2U6IHNwbGljZSxcbiAgcmVwbGFjZTogcmVwbGFjZSxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZpbmQ6IGZpbmQsXG4gIHBydW5lOiBwcnVuZSxcbiAgcGF0Y2g6IHBhdGNoLFxuICBhdWdtZW50OiBhdWdtZW50LFxuICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZTogZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lOiBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5OiBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeTogYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaywgaW5kZXgpIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3aGlsc3Q6IHdoaWxzdCxcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlOiBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5OiBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHk6IHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuZnVuY3Rpb24gZG9lc0VudHJ5RXhpc3QoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IGVudHJ5RXhpc3RzID0gZnMuZXhpc3RzU3luYyhhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBlbnRyeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gZG9lc0ZpbGVFeGlzdChhYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBkb2VzRW50cnlFeGlzdChhYnNvbHV0ZVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBkb2VzRGlyZWN0b3J5RXhpc3QoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZURpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGRvZXNFbnRyeUV4aXN0KGFic29sdXRlUGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCksXG4gICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZnVuY3Rpb24gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcnlFbXB0eShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHJldHVybiBzdWJFbnRyeU5hbWVzO1xufVxuXG5mdW5jdGlvbiByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb0ZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuYW1lRmlsZShvbGRBYnNvbHV0ZUZpbGVQYXRoLCBuZXdBYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkQWJzb2x1dGVGaWxlUGF0aCwgbmV3QWJzb2x1dGVGaWxlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRzKGFic29sdXRlRmlsZVBhdGgpIHtcbiAgcmV0dXJuIGZzLnN0YXRTeW5jKGFic29sdXRlRmlsZVBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9lc0VudHJ5RXhpc3Q6IGRvZXNFbnRyeUV4aXN0LFxuICBkb2VzRmlsZUV4aXN0OiBkb2VzRmlsZUV4aXN0LFxuICBkb2VzRGlyZWN0b3J5RXhpc3Q6IGRvZXNEaXJlY3RvcnlFeGlzdCxcbiAgaXNFbnRyeUZpbGU6IGlzRW50cnlGaWxlLFxuICBpc0VudHJ5RGlyZWN0b3J5OiBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5OiBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5OiByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZTogcmVhZEZpbGUsXG4gIHdyaXRlRmlsZTogd3JpdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGU6IGFwcGVuZFRvRmlsZSxcbiAgcmVuYW1lRmlsZTogcmVuYW1lRmlsZSxcbiAgZ2V0U3RhdHM6IGdldFN0YXRzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByYyA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9yYycpLFxuICAgICAgbG9nID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL2xvZycpLFxuICAgICAgYWpheCA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9hamF4JyksXG4gICAgICBvbkVUWCA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9vbkVUWCcpLFxuICAgICAgcHJvbXB0ID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL3Byb21wdCcpO1xuXG5jb25zdCB7IGdldCwgcG9zdCB9ID0gYWpheDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZzogbG9nLFxuICByYzogcmMsXG4gIGdldDogZ2V0LFxuICBwb3N0OiBwb3N0LFxuICBvbkVUWDogb25FVFgsXG4gIHByb21wdDogcHJvbXB0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBHRVRfTUVUSE9EID0gJ0dFVCcsXG4gICAgICBQT1NUX01FVEhPRCA9ICdQT1NUJztcblxuZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSB1bmRlZmluZWQ7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwganNvbiwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0OiBnZXQsXG4gIHBvc3Q6IHBvc3Rcbn07XG5cbmZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZVRleHQgfSA9IHhtbEh0dHBSZXF1ZXN0O1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgaWYgKHN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3QganNvblN0cmluZyA9IHJlc3BvbnNlVGV4dCwgLy8vXG4gICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgIGNhbGxiYWNrKGpzb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gIHhtbEh0dHBSZXF1ZXN0LnNlbmQoYm9keSk7XG59XG5cbmZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0vJHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fS8ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZShmdW5jdGlvbihxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgPyAnJicgOiAnJztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgJycpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgcGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9wYXRoJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgZG9lc0ZpbGVFeGlzdCwgcmVhZEZpbGUsIGFwcGVuZFRvRmlsZSwgcmVuYW1lRmlsZSwgZ2V0U3RhdHMgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNvbnN0IFRSQUNFID0gJ1RSQUNFJyxcbiAgICAgIERFQlVHID0gJ0RFQlVHJyxcbiAgICAgIElORk8gPSAnSU5GTycsXG4gICAgICBXQVJOSU5HID0gJ1dBUk5JTkcnLFxuICAgICAgRVJST1IgPSAnRVJST1InLFxuICAgICAgRkFUQUwgPSAnRkFUQUwnO1xuXG5sZXQgbG9nTGV2ZWwgPSBXQVJOSU5HLFxuICAgIGxvZ0ZpbGVCYXNlTmFtZSA9ICdkZWZhdWx0JyxcbiAgICBsb2dEaXJlY3RvcnlQYXRoID0gbnVsbDtcblxuZnVuY3Rpb24gbG9nKG1lc3NhZ2UsIGxldmVsID0gJycpIHtcbiAgbGV0IHBlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4ID0gMjtcblxuICBjb25zdCBsZXZlbHMgPSBbXG4gICAgVFJBQ0UsXG4gICAgREVCVUcsXG4gICAgSU5GTyxcbiAgICBXQVJOSU5HLFxuICAgIEVSUk9SLFxuICAgIEZBVEFMXG4gIF07XG5cbiAgaWYgKGxldmVsKSB7IC8vL1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZihsZXZlbCksXG4gICAgICAgICAgbG9nTGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxvZ0xldmVsKTtcblxuICAgIGlmIChsZXZlbEluZGV4IDwgbG9nTGV2ZWxJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4ICs9IDE7XG5cbiAgICBsZXZlbCA9IGAke2xldmVsfSBgOyAgLy8vXG4gIH1cblxuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcigpLFxuICAgICAgICB7IHN0YWNrIH0gPSBlcnJvcixcbiAgICAgICAgc3RhY2tNZXNzYWdlcyA9IHN0YWNrLnNwbGl0KC9cXHJcXG58XFxuLyksXG4gICAgICAgIHBlcnRpbmVudFN0YWNrTWVzc2FnZSA9IHN0YWNrTWVzc2FnZXNbcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXhdLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSxcbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2UocGVydGluZW50U3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbGluZU51bWJlciA9IGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHBlcnRpbmVudFN0YWNrTWVzc2FnZSksXG4gICAgICAgIGxvZ01lc3NhZ2UgPSBgJHtsZXZlbH0ke2N1cnJlbnREYXRlQW5kVGltZVN0cmluZ30gJHtmaWxlUGF0aH0oJHtsaW5lTnVtYmVyfSkgJHttZXNzYWdlfWA7XG5cbiAgY29uc29sZS5sb2cobG9nTWVzc2FnZSk7XG5cbiAgaWYgKGxvZ0RpcmVjdG9yeVBhdGggIT09IG51bGwpIHtcbiAgICByb2xsT3ZlckxvZ0ZpbGUoKTtcblxuICAgIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgICBsb2dGaWxlQ29udGVudCA9IGAke2xvZ01lc3NhZ2V9XFxuYDtcblxuICAgIGFwcGVuZFRvRmlsZShsb2dGaWxlUGF0aCwgbG9nRmlsZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ01lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIHRyYWNlKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBUUkFDRSk7IH1cblxuZnVuY3Rpb24gZGVidWcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIERFQlVHKTsgfVxuXG5mdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBJTkZPKTsgfVxuXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBXQVJOSU5HKTsgfVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgRVJST1IpOyB9XG5cbmZ1bmN0aW9uIGZhdGFsKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBGQVRBTCk7IH1cblxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHsgbG9nTGV2ZWwgPSBsZXZlbDsgfVxuXG5mdW5jdGlvbiBzZXRMb2dGaWxlQmFzZU5hbWUoZmlsZUJhc2VOYW1lKSB7IGxvZ0ZpbGVCYXNlTmFtZSA9IGZpbGVCYXNlTmFtZTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHsgbG9nRGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGg7IH1cblxuZnVuY3Rpb24gZ2V0TG9nRmlsZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZUNvbnRlbnQgPSByZWFkRmlsZShsb2dGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIGxvZ0ZpbGVDb250ZW50O1xufVxuXG5PYmplY3QuYXNzaWduKGxvZywge1xuICBUUkFDRTogVFJBQ0UsXG4gIERFQlVHOiBERUJVRyxcbiAgSU5GTzogSU5GTyxcbiAgV0FSTklORzogV0FSTklORyxcbiAgRVJST1I6IEVSUk9SLFxuICBGQVRBTDogRkFUQUwsXG4gIHRyYWNlOiB0cmFjZSxcbiAgZGVidWc6IGRlYnVnLFxuICBpbmZvOiBpbmZvLFxuICB3YXJuaW5nOiB3YXJuaW5nLFxuICBlcnJvcjogZXJyb3IsXG4gIGZhdGFsOiBmYXRhbCxcbiAgc2V0TG9nTGV2ZWw6IHNldExvZ0xldmVsLFxuICBzZXRMb2dGaWxlQmFzZU5hbWU6IHNldExvZ0ZpbGVCYXNlTmFtZSxcbiAgc2V0TG9nRGlyZWN0b3J5UGF0aDogc2V0TG9nRGlyZWN0b3J5UGF0aCxcbiAgZ2V0TG9nRmlsZUNvbnRlbnQ6IGdldExvZ0ZpbGVDb250ZW50XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2c7XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBsb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0ubG9nYCxcbiAgICAgICAgbG9nRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGxvZ0RpcmVjdG9yeVBhdGgsIGxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gbG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpIHtcbiAgY29uc3QgY3VycmVudERhdGVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZVN0cmluZygpLFxuICAgICAgICByb2xsZWRPdmVyTG9nRmlsZU5hbWUgPSBgJHtsb2dGaWxlQmFzZU5hbWV9LiR7Y3VycmVudERhdGVTdHJpbmd9LmxvZ2AsXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlU3RhdHMgPSBnZXRTdGF0cyhsb2dGaWxlUGF0aCksXG4gICAgICAgIHsgbXRpbWUgfSA9IGxvZ0ZpbGVTdGF0cyxcbiAgICAgICAgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBuZXcgRGF0ZShtdGltZSk7ICAvLy9cblxuICByZXR1cm4gbG9nRmlsZUxhc3RNb2RpZmllZERhdGU7XG59XG5cbmZ1bmN0aW9uIHJvbGxPdmVyTG9nRmlsZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlRXhpc3RzID0gZG9lc0ZpbGVFeGlzdChsb2dGaWxlUGF0aCk7XG5cbiAgaWYgKCFsb2dGaWxlRXhpc3RzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlID0gaXNEYXRlQ3VycmVudERhdGUobG9nRmlsZUxhc3RNb2RpZmllZERhdGUpO1xuXG4gIGlmICghbG9nRmlsZUxhc3RNb2RpZmllZERhdGVDdXJyZW50RGF0ZSkge1xuICAgIGNvbnN0IHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpO1xuXG4gICAgcmVuYW1lRmlsZShsb2dGaWxlUGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0RhdGVDdXJyZW50RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGN1cnJlbnREYXRlU3RyaW5nID0gY3VycmVudERhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGRhdGVDdXJyZW50RGF0ZSA9IChkYXRlU3RyaW5nID09PSBjdXJyZW50RGF0ZVN0cmluZyk7XG5cbiAgcmV0dXJuIGRhdGVDdXJyZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgaG91cnMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRIb3VycygpLCAyKSxcbiAgICAgICAgbWludXRlcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbnV0ZXMoKSwgMiksXG4gICAgICAgIHNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRTZWNvbmRzKCksIDIpLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMyksXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc30uJHttaWxsaXNlY29uZHN9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goLyhcXC8uKylcXDpcXGQrXFw6XFxkKy8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aCA9IHBhdGgucmVzb2x2ZSgnLicpLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aExlbmd0aCA9IGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aC5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoICsgMSwgIC8vL1xuICAgICAgICBmaWxlUGF0aCA9IGFic29sdXRlRmlsZVBhdGguc3Vic3RyKHN0YXJ0KTtcblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSkge1xuICBjb25zdCBtYXRjaGVzID0gc3RhY2tNZXNzYWdlLm1hdGNoKC9cXDooXFxkKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGxpbmVOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0V2l0aFplcm9lcyhzdHJpbmcsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBwYWRTdHJpbmcgPSAnMCcsXG4gICAgICAgIHBhZGRlZFN0cmluZyA9IHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFyZ2V0TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgcGFkZGluZyArPSBwYWRTdHJpbmc7XG4gIH1cblxuICBjb25zdCBwYWRkZWRTdHJpbmcgPSBgJHtwYWRkaW5nfSR7c3RyaW5nfWAuc3Vic3RyKC10YXJnZXRMZW5ndGgpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRVRYX0NIQVJBQ1RFUiA9ICdcXHUwMDAzJztcblxuZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBjb25zdCB7IHN0ZGluIH0gPSBwcm9jZXNzLFxuICAgICAgICB7IHNldFJhd01vZGUgfSA9IHN0ZGluO1xuXG4gIGlmIChzZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSAndXRmOCc7XG5cbiAgICBzdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuICAgIHN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHN0ZGluLnJlc3VtZSgpO1xuXG4gICAgc3RkaW4uYWRkTGlzdGVuZXIoJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgZGF0YUhhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGF0YUhhbmRsZXIoY2hhcmFjdGVyKSB7XG4gICAgaWYgKGNoYXJhY3RlciA9PT0gRVRYX0NIQVJBQ1RFUikge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9uRVRYO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBvbkVUWCA9IHJlcXVpcmUoJy4vb25FVFgnKSxcbiAgICAgIGFzeW5jaHJvbm91c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKTtcblxuY29uc3QgeyBzdGRpbiwgc3Rkb3V0IH0gPSBwcm9jZXNzLFxuICAgICAgeyB3aGlsc3QgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgZXhpdCB9ID0gcHJvY2VzcztcblxuY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KSxcbiAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIgPSAnXFxuJyxcbiAgICAgIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSAnXFxyJztcblxuZnVuY3Rpb24gcHJvbXB0KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHZhbHVlID0gbnVsbCxcbiAgICAgICAgeyBhdHRlbXB0cyA9IDMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGF0dGVtcHRzOiBhdHRlbXB0cyxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNvbnRleHQ7XG4gICAgXG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9LCBjb250ZXh0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9tcHQ7XG5cbmZ1bmN0aW9uIGF0dGVtcHQobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBsZXQgeyBhdHRlbXB0cyB9ID0gY29udGV4dDtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSAoYXR0ZW1wdHMtLSA9PT0gMCk7XG4gIFxuICBpZiAodGVybWluYXRlKSB7XG4gICAgZG9uZSgpO1xuICAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uLFxuICAgICAgICAgIGVuY29kaW5nID0gJ3V0ZjgnLFxuICAgICAgICAgIGhpZGRlbiA9IGZhbHNlIH0gPSBvcHRpb25zO1xuXG4gIGhpZGRlbiA/IFxuICAgIGhpZGRlbklucHV0KGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIDpcbiAgICAgIHZpc2libGVJbnB1dChkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayh2YWx1ZSkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24odmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybi50ZXN0KHZhbHVlKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzOiBhdHRlbXB0c1xuICAgICAgfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlzaWJsZUlucHV0KGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgcmF3TW9kZSA9IGZhbHNlO1xuXG4gIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgbGV0IHZhbHVlO1xuXG4gIGNvbnN0IGxpc3RlbmVyID0gZnVuY3Rpb24oY2h1bmspIHtcbiAgICB2YWx1ZSA9IGNodW5rLnRyaW0oKTtcblxuICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgbGlzdGVuZXIpO1xuXG4gICAgc3RkaW4ucGF1c2UoKTtcblxuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfTtcblxuICBzdGRpbi5vbignZGF0YScsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gaGlkZGVuSW5wdXQoZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgb2ZmRVRYID0gb25FVFgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ15DJyk7XG5cbiAgICAgICAgICBleGl0KCk7XG4gICAgICAgIH0pO1xuXG4gIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgbGV0IHZhbHVlID0gJyc7XG5cbiAgY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbihjaHVuaykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNodW5rLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgc3Rkb3V0LndyaXRlKExJTkVfRkVFRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgbGlzdGVuZXIpO1xuXG4gICAgICAgIHN0ZGluLnBhdXNlKCk7XG5cbiAgICAgICAgb2ZmRVRYKCk7XG5cbiAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSIDpcbiAgICAgICAgdmFsdWUgPSB0cnVuY2F0ZSh2YWx1ZSk7XG5cbiAgICAgICAgc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgIHN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICBzdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgc3RkaW4ub24oJ2RhdGEnLCBsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHZhbHVlKSB7IHJldHVybiB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSAxKTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJlYWRGaWxlLCB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmxldCByY0Jhc2VFeHRlbnNpb24gPSAnJztcblxuZnVuY3Rpb24gcmMoZW52aXJvbm1lbnROYW1lT3JBcmd2ID0gbnVsbCkge1xuICBsZXQgZW52aXJvbm1lbnQsXG4gICAgICBlbnZpcm9ubWVudE5hbWU7XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZU9yQXJndiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgYXJndiA9IGVudmlyb25tZW50TmFtZU9yQXJndjtcblxuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpO1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZU9yQXJndjtcbiAgfVxuXG4gIGNvbnN0IGpzb24gPSByZWFkUkNGaWxlKCksXG4gICAgICAgIHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZChmdW5jdGlvbihlbnZpcm9ubWVudCkge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBlbnZpcm9ubWVudCxcbiAgICAgICAgICAgIGZvdW5kID0gKG5hbWUgPT09IGVudmlyb25tZW50TmFtZSk7XG5cbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBlbnZpcm9ubWVudC5uYW1lO1xuXG4gIE9iamVjdC5hc3NpZ24ocmMsIGVudmlyb25tZW50KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRSQ0ZpbGUoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYC4vLiR7cmNCYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShmaWxlUGF0aCksXG4gICAgICAgIGZpbGVDb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCBmaWxlUGF0aCA9IGAuLy4ke3JjQmFzZUV4dGVuc2lvbn1yY2AsXG4gICAgICAgIGFic29sdXRlRmlsZVBhdGggPSBwYXRoLnJlc29sdmUoZmlsZVBhdGgpLFxuICAgICAgICBmaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIGBcXHRgKTtcblxuICB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgZmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wcGVydGllcywgLi4uZGVsZXRlZFByb3BlcnR5TmFtZXMpIHtcbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgaWYgKGFkZGVkUHJvcHBlcnRpZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKGpzb24sIGFkZGVkUHJvcHBlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihkZWxldGVkUHJvcGVydHlOYW1lKSB7XG4gICAgZGVsZXRlIGpzb25bZGVsZXRlZFByb3BlcnR5TmFtZV07XG4gIH0pO1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pOyAgICAgIFxufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24oYmFzZUV4dGVuc2lvbikgeyByY0Jhc2VFeHRlbnNpb24gPSBiYXNlRXh0ZW5zaW9uOyB9XG5cbk9iamVjdC5hc3NpZ24ocmMsIHtcbiAgcmVhZFJDRmlsZTogcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGU6IHdyaXRlUkNGaWxlLFxuICB1cGRhdGVSQ0ZpbGU6IHVwZGF0ZVJDRmlsZSxcbiAgc2V0UkNCYXNlRXh0ZW5zaW9uOiBzZXRSQ0Jhc2VFeHRlbnNpb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJjO1xuXG5mdW5jdGlvbiBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KSB7XG4gIGxldCBlbnZpcm9ubWVudE5hbWUgPSBudWxsO1xuXG4gIGFyZ3YuZmluZChmdW5jdGlvbihhcmd1bWVudCkgeyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC9cXC1cXC1lbnZpcm9ubWVudD0oLispLyksXG4gICAgICAgICAgZm91bmQgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBlbnZpcm9ubWVudE5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSA9IGFycmF5O1xuXG5mdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eXFwuezEsMn1cXC8vKSxcbiAgICAgICAgcGF0aFJlbGF0aXZlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gIXBhdGhSZWxhdGl2ZVBhdGg7IC8vL1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcGF0aCkge1xuICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7IC8vL1xuXG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3REaXJlY3RvcnlOYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgcG9zaXRpb24gPSBwYXRoLnNlYXJjaChyZWdFeHApLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUGF0aHMoZGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBhYnNvbHV0ZVBhdGggPSBudWxsO1xuXG4gIGNvbnN0IGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzID0gZGlyZWN0b3J5UGF0aC5zcGxpdCgnLycpLFxuICAgICAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgnLycpO1xuXG4gIGxldCBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyksXG4gICAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLicpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLi4nKSAmJiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICAgIGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gW10uY29uY2F0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKS5jb25jYXQocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gICAgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuam9pbignLycpO1xuICB9XG5cbiAgcmV0dXJuIGFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoMSwgcGF0aDIpIHtcbiAgcGF0aDEgPSBwYXRoMS5yZXBsYWNlKC9cXC8kLywgJycpOyAgLy8vXG5cbiAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7cGF0aDF9LyR7cGF0aDJ9YDtcblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5mdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4rXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RvcnlQYXRoO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvKF4uKylcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1BhdGhSZWxhdGl2ZVBhdGg6IGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoOiBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lOiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSxcbiAgaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aDogaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCxcbiAgY29tYmluZVBhdGhzOiBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHM6IGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHBhcnNlRmlsZShmaWxlUGF0aCwgYXJncykge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncykge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpLFxuICAgICAgICBwYXJzZWRMaW5lcyA9IHBhcnNlTGluZXMobGluZXMsIGFyZ3MpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VkTGluZXMuam9pbignXFxuJyk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZShsaW5lLCBhcmdzKSB7XG4gIGNvbnN0IHBhcnNlZExpbmUgPSBsaW5lLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIGZ1bmN0aW9uKG1hdGNoLCB0b2tlbikge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGaWxlOiBwYXJzZUZpbGUsXG4gIHBhcnNlQ29udGVudDogcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmU6IHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncykge1xuICBjb25zdCBwYXJzZWRMaW5lcyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gJyc7XG5cbiAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcGFyc2VkVG9rZW4gPSBhcmdzW3Rva2VuXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUb2tlbjtcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
