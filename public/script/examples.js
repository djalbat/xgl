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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Zoom = require('./camera/zoom'),
    angles = require('./camera/angles'),
    Normal = require('./camera/normal'),
    Rotation = require('./camera/rotation'),
    Position = require('./camera/position'),
    Projection = require('./camera/projection'),
    MouseEvents = require('./camera/mouseEvents');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(zoom, canvas, updateHandler) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.zoom = zoom;
    _this.canvas = canvas;
    _this.updateHandler = updateHandler;
    return _this;
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
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      ///
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(updateHandler) {
      this.updateHandler = updateHandler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.update();
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

      if (this.updateHandler) {
        ///
        this.updateHandler(rotation, position, projection, normal);
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
      this.addMouseEventHandlers();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var initialPosition = properties.initialPosition,
          zoom = Zoom.fromInitialPosition(initialPosition),
          canvas = new Canvas(),
          updateHandler = null,
          camera = new Camera(zoom, canvas, updateHandler);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"./camera/angles":3,"./camera/mouseEvents":6,"./camera/normal":7,"./camera/position":8,"./camera/projection":9,"./camera/rotation":10,"./camera/zoom":11,"./canvas":12,"./element":23}],3:[function(require,module,exports){
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

},{"./coordinates2D":4,"./mouseCoordinates":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./coordinates2D":4}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4');

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

},{"../gl/mat4":55}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4');

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

},{"../gl/mat4":55}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4'),
    constants = require('../constants');

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

},{"../constants":21,"../gl/mat4":55}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4');

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

},{"../gl/mat4":55}],11:[function(require,module,exports){
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
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var initialDistance = -initialPosition[2],
          ///
      distance = initialDistance,
          zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

module.exports = Zoom;

},{"../constants":21}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var programMixin = require('./canvas/mixin/program'),
    textureMixin = require('./canvas/mixin/texture'),
    colourMixin = require('./canvas/mixin/colour'),
    shaderMixin = require('./canvas/mixin/shader'),
    bufferMixin = require('./canvas/mixin/buffer'),
    matrixMixin = require('./canvas/mixin/matrix'),
    depthMixin = require('./canvas/mixin/depth'),
    mouseMixin = require('./canvas/mixin/mouse'),
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
    value: function render(shader, offset, rotation, position, projection, normal) {
      var offsetMatrix = offset.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          projectionMatrix = projection.getMatrix(),
          normalMatrix = normal.getMatrix(),
          offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
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

Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;

},{"./canvas/mixin/buffer":13,"./canvas/mixin/colour":14,"./canvas/mixin/depth":15,"./canvas/mixin/matrix":16,"./canvas/mixin/mouse":17,"./canvas/mixin/program":18,"./canvas/mixin/shader":19,"./canvas/mixin/texture":20,"./utilities/dom":75}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],17:[function(require,module,exports){
'use strict';

var MouseCoordinates = require('../../mouseCoordinates');

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

},{"../../mouseCoordinates":59}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
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

      var childElements = properties.childElements,
          element = new (Function.prototype.bind.apply(Class, [null].concat(remainingArguments)))();


      childElements.forEach(function (childElement) {
        element.updateContext(childElement);
      });

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;

},{}],24:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, (ColourElement.__proto__ || Object.getPrototypeOf(ColourElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourElement, [{
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
  }, {
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return this.vertexColourData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      colourRenderer.addVertexPositionData(this.vertexPositionData);
      colourRenderer.addVertexNormalData(this.vertexNormalData);
      colourRenderer.addVertexIndexData(this.vertexIndexData);
      colourRenderer.addVertexColourData(this.vertexColourData);
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

},{"../element":23}],25:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, (TextureElement.__proto__ || Object.getPrototypeOf(TextureElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureElement, [{
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
  }, {
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      textureRenderer.addVertexPositionData(this.vertexPositionData);
      textureRenderer.addVertexNormalData(this.vertexNormalData);
      textureRenderer.addVertexIndexData(this.vertexIndexData);
      textureRenderer.addTextureCoordinateData(this.textureCoordinateData);
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

},{"../element":23}],26:[function(require,module,exports){
'use strict';

module.exports = {
  shapes: require('./examples/shapes'),
  containerHouse: require('./examples/containerHouse')
};

},{"./examples/containerHouse":32,"./examples/shapes":54}],27:[function(require,module,exports){
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

},{"../../utilities/vertex":78}],28:[function(require,module,exports){
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

},{"../../../element/colour":24,"../../../utilities/vertex":78,"../cuboid":27}],29:[function(require,module,exports){
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

},{"../../../element/texture":25,"../../../utilities/imageMap":77,"../../../utilities/vertex":78,"../cuboid":27}],30:[function(require,module,exports){
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
                firstX = (Math.cos(angle) + 1) / 2,
                firstY = (Math.sin(angle) + 1) / 2,
                secondX = (Math.cos(angle + step) + 1) / 2,
                secondY = (Math.sin(angle + step) + 1) / 2,
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

},{"../../constants":21,"../../utilities/array":74,"../../utilities/vertex":78}],31:[function(require,module,exports){
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


var defaultOffset = [10, 10, 10];

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
                      rotation = properties.rotation,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset, rotation),
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

},{"../../../element/colour":24,"../../../utilities/array":74,"../../../utilities/vertex":78,"../cylinder":30}],32:[function(require,module,exports){
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

},{"../camera":2,"../jiggle":58,"../scene":62,"../utilities/imageMap":77,"./containerHouse/balcony/bedroom":33,"./containerHouse/balcony/main":34,"./containerHouse/floor/first":48,"./containerHouse/floor/second":49,"./containerHouse/floor/third":50,"./containerHouse/foundations":51,"./containerHouse/frame":52}],33:[function(require,module,exports){
'use strict';

var Railing = require('../balcony/railing'),
    BalconySection = require('../balcony/section');

var thickness = Railing.thickness;


var BedroomBalcony = function BedroomBalcony(properties) {
  return [React.createElement(BalconySection, { offset: [0, 16, 19] }), React.createElement(BalconySection, { offset: [4, 16, 19] }), React.createElement(Railing, { offset: [0, 32 - thickness, 19], length: 8 })];
};

module.exports = BedroomBalcony;

},{"../balcony/railing":35,"../balcony/section":39}],34:[function(require,module,exports){
'use strict';

var Railing = require('../balcony/railing'),
    BalconySection = require('../balcony/section');

var thickness = Railing.thickness;


var MainBalcony = function MainBalcony(properties) {
  return [React.createElement(BalconySection, { offset: [40, 0, 19] }), React.createElement(BalconySection, { offset: [44, 0, 19] }), React.createElement(BalconySection, { offset: [40, 16, 19] }), React.createElement(BalconySection, { offset: [44, 16, 19] }), React.createElement(BalconySection, { offset: [36, 16, 19] }), React.createElement(BalconySection, { offset: [32, 16, 19] }), React.createElement(BalconySection, { offset: [28, 16, 19] }), React.createElement(Railing, { offset: [20, 0, 19], length: 28 }), React.createElement(Railing, { offset: [28, 32 - thickness, 19], length: 20 })];
};

module.exports = MainBalcony;

},{"../balcony/railing":35,"../balcony/section":39}],35:[function(require,module,exports){
'use strict';

var vec3 = require('../../../gl/vec3'),
    TopRail = require('./railing/topRail'),
    Uprights = require('./railing/uprights');

var add = vec3.add,
    thickness = TopRail.thickness,
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

},{"../../../gl/vec3":56,"./railing/topRail":36,"./railing/uprights":38}],36:[function(require,module,exports){
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

},{"../../../common/cuboid/colour":28}],37:[function(require,module,exports){
'use strict';

var ColourCylinder = require('../../../common/cylinder/colour');

var thickness = 0.125,
    colour = [0.5, 0.5, 0.5, 1];

var Upright = function Upright(properties) {
      var offset = properties.offset,
          height = properties.height,
          width = thickness,
          depth = thickness; ///

      return React.createElement(ColourCylinder, { colour: colour, offset: offset, width: width, depth: depth, height: height });
};

module.exports = Upright;

},{"../../../common/cylinder/colour":31}],38:[function(require,module,exports){
'use strict';

var vec3 = require('../../../../gl/vec3'),
    Upright = require('./upright');

var add = vec3.add;


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

},{"../../../../gl/vec3":56,"./upright":37}],39:[function(require,module,exports){
'use strict';

var vec3 = require('../../../gl/vec3'),
    Edge = require('./section/edge'),
    OpenMesh = require('./section/openMesh'),
    LongEdge = require('./section/edge/long'),
    ShortEdge = require('./section/edge/short');

var add = vec3.add,
    width = 4,
    depth = 16;
var height = Edge.height,
    thickness = Edge.thickness;


var BalconySection = function BalconySection(properties) {
  var offset = properties.offset;


  return [React.createElement(LongEdge, { offset: add(offset, [0, 0, -height]), depth: depth }), React.createElement(LongEdge, { offset: add(offset, [width - thickness, 0, -height]), depth: depth }), React.createElement(ShortEdge, { offset: add(offset, [0, 0, -height]), width: width }), React.createElement(ShortEdge, { offset: add(offset, [0, 16 - thickness, -height]), width: width }), React.createElement(OpenMesh, { offset: add(offset, [thickness, thickness, 0]), width: width - 2 * thickness, depth: depth - 2 * thickness })];
};

module.exports = BalconySection;

},{"../../../gl/vec3":56,"./section/edge":40,"./section/edge/long":41,"./section/edge/short":42,"./section/openMesh":43}],40:[function(require,module,exports){
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

},{"../../../common/cuboid/texture":29}],41:[function(require,module,exports){
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

},{"../edge":40}],42:[function(require,module,exports){
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

},{"../edge":40}],43:[function(require,module,exports){
'use strict';

var vec3 = require('../../../../gl/vec3'),
    ColourCuboid = require('../../../common/cuboid/colour'),
    ColourCylinder = require('../../../common/cylinder/colour');

var add = vec3.add,
    overallHeight = 0.25,
    overallThickness = 0.025,
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
                _width = overallThickness,
                ///
            _depth = overallDepth,
                height = overallHeight;

            elements.push(React.createElement(ColourCuboid, { colour: colour, offset: add(offset, [step * index, 0, -height]), width: _width, depth: _depth, height: height }));
      }

      for (var _index = 1; _index < depthwiseCount; _index++) {
            var _step = overallDepth / depthwiseCount,
                diameter = overallHeight / 2,
                ///
            _width2 = diameter,
                ///
            _depth2 = diameter,
                ///
            _height = overallWidth; ///

            elements.push(React.createElement(ColourCylinder, { colour: colour, offset: add(offset, [0, _step * _index, -diameter / 2]), width: _width2, depth: _depth2, height: _height, rotation: [0, 90, 0] }));
      }

      return elements;
};

module.exports = OpenMesh;

},{"../../../../gl/vec3":56,"../../../common/cuboid/colour":28,"../../../common/cylinder/colour":31}],44:[function(require,module,exports){
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

},{"../common/cuboid/texture":29}],45:[function(require,module,exports){
'use strict';

var ColourCuboid = require('../common/cuboid/colour');

var Container = function Container(properties) {
  var offset = properties.offset,
      width = properties.width;


  return React.createElement(ColourCuboid, { colour: [1, 1, 1, 1], offset: offset, width: width, depth: 8, height: 9.5 });
};

module.exports = Container;

},{"../common/cuboid/colour":28}],46:[function(require,module,exports){
'use strict';

var Container = require('../container');

var FortyFootContainer = function FortyFootContainer(properties) {
  var offset = properties.offset;


  return React.createElement(Container, { offset: offset, width: 40 });
};

module.exports = FortyFootContainer;

},{"../container":45}],47:[function(require,module,exports){
'use strict';

var Container = require('../container');

var TwentyFootContainer = function TwentyFootContainer(properties) {
  var offset = properties.offset;


  return React.createElement(Container, { offset: offset, width: 20 });
};

module.exports = TwentyFootContainer;

},{"../container":45}],48:[function(require,module,exports){
'use strict';

var FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var FirstFloor = function FirstFloor(properties) {
  return [React.createElement(FortyFootContainer, { offset: [8, 0, 0] }), React.createElement(FortyFootContainer, { offset: [8, 8, 0] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 0] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 0] })];
};

module.exports = FirstFloor;

},{"../container/fortyFoot":46,"../container/twentyFoot":47}],49:[function(require,module,exports){
'use strict';

var FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var SecondFloor = function SecondFloor(properties) {
  return [React.createElement(FortyFootContainer, { offset: [0, 0, 9.5] }), React.createElement(FortyFootContainer, { offset: [0, 8, 9.5] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 9.5] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 9.5] })];
};

module.exports = SecondFloor;

},{"../container/fortyFoot":46,"../container/twentyFoot":47}],50:[function(require,module,exports){
'use strict';

var TwentyFootContainer = require('../container/twentyFoot');

var ThirdFloor = function ThirdFloor(properties) {
  return [React.createElement(TwentyFootContainer, { offset: [0, 0, 19] }), React.createElement(TwentyFootContainer, { offset: [0, 8, 19] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 19] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 19] })];
};

module.exports = ThirdFloor;

},{"../container/twentyFoot":47}],51:[function(require,module,exports){
'use strict';

var ConcreteSlab = require('./concreteSlab');

var Foundations = function Foundations(properties) {
  return [React.createElement(ConcreteSlab, { offset: [-0.5, -0.5, -1], width: 12.5, depth: 33, height: 1 }), React.createElement(ConcreteSlab, { offset: [24, -0.5, -1], width: 24.4, depth: 33, height: 1 })];
};

module.exports = Foundations;

},{"./concreteSlab":44}],52:[function(require,module,exports){
'use strict';

var SteelSection = require('./steelSection');

var Frame = function Frame(properties) {
  var width = 48,
      depth = 32,
      height = 29;

  return [React.createElement(SteelSection, { offset: [-0.5, -0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [-0.5, depth - 0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [width - 0.5, depth - 0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [width - 0.5, -0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [-0.5, -0.5, height - 1], width: 1, depth: depth, height: 1 }), React.createElement(SteelSection, { offset: [width - 0.5, -0.5, height - 1], width: 1, depth: depth, height: 1 }), React.createElement(SteelSection, { offset: [-0.5, -0.5, height - 1], width: width, depth: 1, height: 1 }), React.createElement(SteelSection, { offset: [-0.5, depth - 0.5, height - 1], width: width, depth: 1, height: 1 })];
};

module.exports = Frame;

},{"./steelSection":53}],53:[function(require,module,exports){
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

},{"../common/cuboid/texture":29}],54:[function(require,module,exports){
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
      React.createElement(TextureCuboid, { width: 1, depth: 1, height: 1, imageName: 'bricks.jpg' }),
      React.createElement(ColourCylinder, { width: 1, depth: 1, height: 5, colour: [1, 0, 0, 1], rotation: [0, 90, 0], offset: [2, 0, 0] })
    );
  });
};

module.exports = shapes;

},{"../camera":2,"../jiggle":58,"../scene":62,"../utilities/imageMap":77,"./common/cuboid/texture":29,"./common/cylinder/colour":31}],55:[function(require,module,exports){
'use strict';

var mat4 = require('gl-mat4');

module.exports = mat4;

},{"gl-mat4":89}],56:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3');

function add(vec1, vec2) {
  var vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}

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

module.exports = {
  add: add,
  subtract: subtract,
  cross: cross
};

},{"gl-vec3":115}],57:[function(require,module,exports){
'use strict';

var vec4 = require('gl-vec4');

module.exports = vec4;

},{"gl-vec4":145}],58:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

},{"./react":60}],59:[function(require,module,exports){
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

},{"./coordinates2D":22}],60:[function(require,module,exports){
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

},{"./element":23,"./utilities/array":74}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var Renderer = function () {
  function Renderer(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, Renderer);

    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];
    this.maximumVertexIndex = -1; ///
  }

  _createClass(Renderer, [{
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
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      var vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexPositionComponents = 3;

      canvas.bindBuffer(this.vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      var vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexNormalComponents = 3;

      canvas.bindBuffer(this.vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexIndexElementBuffer',
    value: function bindVertexIndexElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexElementBuffer);
    }
  }]);

  return Renderer;
}();

module.exports = Renderer;

},{"necessary":163}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Offset = require('./scene/offset'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(offsetVec3, canvas, colourRenderer, textureRenderer) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.offsetVec3 = offsetVec3;
    _this.canvas = canvas;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
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
      return this.colourRenderer;
    }
  }, {
    key: 'getTextureShader',
    value: function getTextureShader() {
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
    key: 'drawElements',
    value: function drawElements(offset, rotation, position, projection, normal) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(this.canvas);

      this.canvas.render(this.colourRenderer, offset, rotation, position, projection, normal);

      this.canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(this.canvas);

      this.textureRenderer.activateTexture(this.canvas);

      this.canvas.render(this.textureRenderer, offset, rotation, position, projection, normal);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(rotation, position, projection, normal) {
      var offset = Offset.fromVec3(this.offsetVec3);

      this.drawElements(offset, rotation, position, projection, normal);
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
          offset = properties.offset,
          offsetVec3 = offset,
          canvas = new Canvas(),
          colourRenderer = ColourShader.fromNothing(canvas),
          textureRenderer = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offsetVec3, canvas, colourRenderer, textureRenderer);


      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer);
      });

      if (imageMap) {
        textureRenderer.createTexture(imageMap, canvas);
      }

      colourRenderer.createBuffers(canvas);
      textureRenderer.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;

},{"./canvas":12,"./element":23,"./scene/offset":63,"./shader/colour":64,"./shader/texture":73}],63:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4');

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

},{"../gl/mat4":55}],64:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../renderer'),
    UniformLocations = require('./locations/uniform'),
    AttributeLocations = require('./locations/attribute'),
    vertexShaderSource = require('./source/colour/vertex'),
    fragmentShaderSource = require('./source/colour/fragment');

var vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData) {
    _classCallCheck(this, ColourShader);

    var _this = _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).call(this, program, uniformLocations, attributeLocations));

    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    _this.vertexColourData = vertexColourData;
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
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var vertexShader = canvas.createVertexShader(vertexShaderSource),
          fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
          program = canvas.createProgram(vertexShader, fragmentShader),
          vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          vertexColourData = [],
          colourShader = new ColourShader(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;

},{"../renderer":61,"./locations/attribute":65,"./locations/uniform":66,"./source/colour/fragment":67,"./source/colour/vertex":68,"necessary":163}],65:[function(require,module,exports){
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
    value: function fromProgram(program, canvas) {
      var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          attributeLocations = new AttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation);

      return attributeLocations;
    }
  }]);

  return AttributeLocations;
}();

Object.assign(AttributeLocations, {
  vertexPositionAttributeName: vertexPositionAttributeName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = AttributeLocations;

},{"../source/lighting":69,"../source/position":70}],66:[function(require,module,exports){
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
    value: function fromProgram(program, canvas) {
      var offsetMatrixUniformLocation = canvas.getUniformLocation(program, offsetMatrixName),
          rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName),
          uniformLocations = new UniformLocations(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation);

      return uniformLocations;
    }
  }]);

  return UniformLocations;
}();

Object.assign(UniformLocations, {
  offsetMatrixName: offsetMatrixName,
  rotationMatrixName: rotationMatrixName,
  positionMatrixName: positionMatrixName,
  projectionMatrixName: projectionMatrixName,
  normalMatrixName: normalMatrixName
});

module.exports = UniformLocations;

},{"../source/lighting":69,"../source/position":70}],67:[function(require,module,exports){
'use strict';

var fragmentShaderSource = new String('\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ');

module.exports = fragmentShaderSource;

},{}],68:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = new String('\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + lightingSource + '\n      \n        ' + positionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":69,"../../source/position":70}],69:[function(require,module,exports){
'use strict';

var normalMatrixName = 'uNormalMatrix',
    vertexNormalAttributeName = 'aVertexNormal';

var lightingSource = new String('\n  \n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 ambientLight = vec3(0.3, 0.3, 0.3),\n             directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vec3 lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ');

Object.assign(lightingSource, {
  normalMatrixName: normalMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = lightingSource;

},{}],70:[function(require,module,exports){
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

},{}],71:[function(require,module,exports){
'use strict';

var samplerName = 'uSampler',
    fragmentShaderSource = new String('\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ');

Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});

module.exports = fragmentShaderSource;

},{}],72:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = new String('\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + lightingSource + '\n      \n        ' + positionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":69,"../../source/position":70}],73:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../renderer'),
    UniformLocations = require('./locations/uniform'),
    AttributeLocations = require('./locations/attribute'),
    vertexShaderSource = require('./source/texture/vertex'),
    fragmentShaderSource = require('./source/texture/fragment');

var textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName,
    samplerName = fragmentShaderSource.samplerName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData) {
    _classCallCheck(this, TextureShader);

    var _this = _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).call(this, program, uniformLocations, attributeLocations));

    _this.samplerUniformLocation = samplerUniformLocation;
    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    _this.textureCoordinateData = textureCoordinateData;
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
      var vertexShader = canvas.createVertexShader(vertexShaderSource),
          fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
          program = canvas.createProgram(vertexShader, fragmentShader),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureCoordinateData = [],
          textureShader = new TextureShader(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData);

      return textureShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;

},{"../renderer":61,"./locations/attribute":65,"./locations/uniform":66,"./source/texture/fragment":71,"./source/texture/vertex":72,"necessary":163}],74:[function(require,module,exports){
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

},{"necessary":163}],75:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],76:[function(require,module,exports){
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

},{"necessary":163}],77:[function(require,module,exports){
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

},{"../../bin/constants":1,"../utilities/array":74,"../utilities/image":76}],78:[function(require,module,exports){
'use strict';

var vec3 = require('../gl/vec3'),
    vec4 = require('../gl/vec4'),
    mat4 = require('../gl/mat4'),
    arrayUtilities = require('../utilities/array');

var dice = arrayUtilities.dice,
    flatten = arrayUtilities.flatten,
    create = mat4.create,
    translate = mat4.translate,
    scale = mat4.scale,
    rotate = mat4.rotate,
    transformMat4 = vec4.transformMat4,
    subtract = vec3.subtract,
    cross = vec3.cross;


var defaultWidth = 1,
    defaultDepth = 1,
    defaultHeight = 1,
    defaultOffset = [0, 0, 0],
    defaultRotation = [0, 0, 0];

function calculateVertexPositionData(initialVertexPositionData) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultWidth;
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDepth;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultHeight;
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultOffset;
  var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultRotation;

  var mat4 = create(),
      xAngle = rotation[0] * Math.PI / 180,
      yAngle = rotation[1] * Math.PI / 180,
      zAngle = rotation[2] * Math.PI / 180;

  translate(mat4, mat4, offset);

  rotate(mat4, mat4, xAngle, [1, 0, 0]);
  rotate(mat4, mat4, yAngle, [0, 1, 0]);
  rotate(mat4, mat4, zAngle, [0, 0, 1]);

  scale(mat4, mat4, [width, depth, height]);

  var vertexPositions = dice(initialVertexPositionData, 4); ///

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    return transformMat4(vertexPosition, vertexPosition, mat4);
  });

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    return vertexPosition.slice(0, 3);
  });

  var vertexPositionData = flatten(vertexPositions);

  return vertexPositionData;
}

function calculateVertexNormalData(initialVertexPositionData) {
  var vertexNormalVectors = [],
      faces = dice(initialVertexPositionData, 16); ///

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
      facesLength = initialVertexPositionDataLength / 16; ///

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

},{"../gl/mat4":55,"../gl/vec3":56,"../gl/vec4":57,"../utilities/array":74}],79:[function(require,module,exports){

},{}],80:[function(require,module,exports){
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
},{}],81:[function(require,module,exports){
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
},{}],82:[function(require,module,exports){
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
},{}],83:[function(require,module,exports){
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
},{}],84:[function(require,module,exports){
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
},{}],85:[function(require,module,exports){
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
},{}],86:[function(require,module,exports){
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
},{}],87:[function(require,module,exports){
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
},{}],88:[function(require,module,exports){
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
},{}],89:[function(require,module,exports){
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
},{"./adjoint":80,"./clone":81,"./copy":82,"./create":83,"./determinant":84,"./fromQuat":85,"./fromRotationTranslation":86,"./frustum":87,"./identity":88,"./invert":90,"./lookAt":91,"./multiply":92,"./ortho":93,"./perspective":94,"./perspectiveFromFieldOfView":95,"./rotate":96,"./rotateX":97,"./rotateY":98,"./rotateZ":99,"./scale":100,"./str":101,"./translate":102,"./transpose":103}],90:[function(require,module,exports){
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
},{}],91:[function(require,module,exports){
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
},{"./identity":88}],92:[function(require,module,exports){
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
},{}],93:[function(require,module,exports){
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
},{}],94:[function(require,module,exports){
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
},{}],95:[function(require,module,exports){
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


},{}],96:[function(require,module,exports){
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
},{}],97:[function(require,module,exports){
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
},{}],98:[function(require,module,exports){
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
},{}],99:[function(require,module,exports){
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
},{}],100:[function(require,module,exports){
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
},{}],101:[function(require,module,exports){
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
},{}],102:[function(require,module,exports){
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
},{}],103:[function(require,module,exports){
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
},{}],104:[function(require,module,exports){
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
},{}],105:[function(require,module,exports){
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

},{"./dot":112,"./fromValues":114,"./normalize":123}],106:[function(require,module,exports){
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
},{}],107:[function(require,module,exports){
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
},{}],108:[function(require,module,exports){
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
},{}],109:[function(require,module,exports){
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
},{}],110:[function(require,module,exports){
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
},{}],111:[function(require,module,exports){
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
},{}],112:[function(require,module,exports){
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
},{}],113:[function(require,module,exports){
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
},{"./create":108}],114:[function(require,module,exports){
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
},{}],115:[function(require,module,exports){
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
},{"./add":104,"./angle":105,"./clone":106,"./copy":107,"./create":108,"./cross":109,"./distance":110,"./divide":111,"./dot":112,"./forEach":113,"./fromValues":114,"./inverse":116,"./length":117,"./lerp":118,"./max":119,"./min":120,"./multiply":121,"./negate":122,"./normalize":123,"./random":124,"./rotateX":125,"./rotateY":126,"./rotateZ":127,"./scale":128,"./scaleAndAdd":129,"./set":130,"./squaredDistance":131,"./squaredLength":132,"./subtract":133,"./transformMat3":134,"./transformMat4":135,"./transformQuat":136}],116:[function(require,module,exports){
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
},{}],117:[function(require,module,exports){
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
},{}],118:[function(require,module,exports){
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
},{}],119:[function(require,module,exports){
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
},{}],120:[function(require,module,exports){
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
},{}],121:[function(require,module,exports){
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
},{}],122:[function(require,module,exports){
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
},{}],123:[function(require,module,exports){
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
},{}],124:[function(require,module,exports){
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
},{}],125:[function(require,module,exports){
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
},{}],126:[function(require,module,exports){
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
},{}],127:[function(require,module,exports){
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
},{}],128:[function(require,module,exports){
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
},{}],129:[function(require,module,exports){
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
},{}],130:[function(require,module,exports){
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
},{}],131:[function(require,module,exports){
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
},{}],132:[function(require,module,exports){
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
},{}],133:[function(require,module,exports){
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
},{}],134:[function(require,module,exports){
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
},{}],135:[function(require,module,exports){
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
},{}],136:[function(require,module,exports){
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
},{}],137:[function(require,module,exports){
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

},{}],138:[function(require,module,exports){
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

},{}],139:[function(require,module,exports){
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

},{}],140:[function(require,module,exports){
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

},{}],141:[function(require,module,exports){
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

},{}],142:[function(require,module,exports){
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

},{}],143:[function(require,module,exports){
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

},{}],144:[function(require,module,exports){
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

},{}],145:[function(require,module,exports){
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

},{"./add":137,"./clone":138,"./copy":139,"./create":140,"./distance":141,"./divide":142,"./dot":143,"./fromValues":144,"./inverse":146,"./length":147,"./lerp":148,"./max":149,"./min":150,"./multiply":151,"./negate":152,"./normalize":153,"./random":154,"./scale":155,"./scaleAndAdd":156,"./set":157,"./squaredDistance":158,"./squaredLength":159,"./subtract":160,"./transformMat4":161,"./transformQuat":162}],146:[function(require,module,exports){
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

},{}],147:[function(require,module,exports){
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

},{}],148:[function(require,module,exports){
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

},{}],149:[function(require,module,exports){
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

},{}],150:[function(require,module,exports){
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

},{}],151:[function(require,module,exports){
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

},{}],152:[function(require,module,exports){
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

},{}],153:[function(require,module,exports){
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

},{}],154:[function(require,module,exports){
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

},{"./normalize":153,"./scale":155}],155:[function(require,module,exports){
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

},{}],156:[function(require,module,exports){
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

},{}],157:[function(require,module,exports){
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

},{}],158:[function(require,module,exports){
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

},{}],159:[function(require,module,exports){
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

},{}],160:[function(require,module,exports){
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

},{}],161:[function(require,module,exports){
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

},{}],162:[function(require,module,exports){
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

},{}],163:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":164,"./lib/utilities/asynchronous":165,"./lib/utilities/fileSystem":166,"./lib/utilities/path":167}],164:[function(require,module,exports){
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

},{}],165:[function(require,module,exports){
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

},{}],166:[function(require,module,exports){
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

},{"fs":79}],167:[function(require,module,exports){
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

},{"./array":164}]},{},[26])(26)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiaW4vY29uc3RhbnRzLmpzIiwiZXM2L2NhbWVyYS5qcyIsImVzNi9jYW1lcmEvYW5nbGVzLmpzIiwiZXM2L2NhbWVyYS9jb29yZGluYXRlczJELmpzIiwiZXM2L2NhbWVyYS9tb3VzZUNvb3JkaW5hdGVzLmpzIiwiZXM2L2NhbWVyYS9tb3VzZUV2ZW50cy5qcyIsImVzNi9jYW1lcmEvbm9ybWFsLmpzIiwiZXM2L2NhbWVyYS9wb3NpdGlvbi5qcyIsImVzNi9jYW1lcmEvcHJvamVjdGlvbi5qcyIsImVzNi9jYW1lcmEvcm90YXRpb24uanMiLCJlczYvY2FtZXJhL3pvb20uanMiLCJlczYvY2FudmFzLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9idWZmZXIuanMiLCJlczYvY2FudmFzL21peGluL2NvbG91ci5qcyIsImVzNi9jYW52YXMvbWl4aW4vZGVwdGguanMiLCJlczYvY2FudmFzL21peGluL21hdHJpeC5qcyIsImVzNi9jYW52YXMvbWl4aW4vbW91c2UuanMiLCJlczYvY2FudmFzL21peGluL3Byb2dyYW0uanMiLCJlczYvY2FudmFzL21peGluL3NoYWRlci5qcyIsImVzNi9jYW52YXMvbWl4aW4vdGV4dHVyZS5qcyIsImVzNi9jb25zdGFudHMuanMiLCJlczYvY29vcmRpbmF0ZXMyRC5qcyIsImVzNi9lbGVtZW50LmpzIiwiZXM2L2VsZW1lbnQvY29sb3VyLmpzIiwiZXM2L2VsZW1lbnQvdGV4dHVyZS5qcyIsImVzNi9leGFtcGxlcy5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jdWJvaWQvY29sb3VyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jdWJvaWQvdGV4dHVyZS5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2N5bGluZGVyL2NvbG91ci5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20uanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvcmFpbGluZy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdG9wUmFpbC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodHMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlL2xvbmcuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uL2VkZ2Uvc2hvcnQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uL29wZW5NZXNoLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbmNyZXRlU2xhYi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2ZvcnR5Rm9vdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvdHdlbnR5Rm9vdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9maXJzdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9zZWNvbmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3IvdGhpcmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZnJhbWUuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2Uvc3RlZWxTZWN0aW9uLmpzIiwiZXM2L2V4YW1wbGVzL3NoYXBlcy5qcyIsImVzNi9nbC9tYXQ0LmpzIiwiZXM2L2dsL3ZlYzMuanMiLCJlczYvZ2wvdmVjNC5qcyIsImVzNi9qaWdnbGUuanMiLCJlczYvbW91c2VDb29yZGluYXRlcy5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZW5kZXJlci5qcyIsImVzNi9zY2VuZS5qcyIsImVzNi9zY2VuZS9vZmZzZXQuanMiLCJlczYvc2hhZGVyL2NvbG91ci5qcyIsImVzNi9zaGFkZXIvbG9jYXRpb25zL2F0dHJpYnV0ZS5qcyIsImVzNi9zaGFkZXIvbG9jYXRpb25zL3VuaWZvcm0uanMiLCJlczYvc2hhZGVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnQuanMiLCJlczYvc2hhZGVyL3NvdXJjZS9jb2xvdXIvdmVydGV4LmpzIiwiZXM2L3NoYWRlci9zb3VyY2UvbGlnaHRpbmcuanMiLCJlczYvc2hhZGVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsImVzNi9zaGFkZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnQuanMiLCJlczYvc2hhZGVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleC5qcyIsImVzNi9zaGFkZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJlczYvdXRpbGl0aWVzL2RvbS5qcyIsImVzNi91dGlsaXRpZXMvaW1hZ2UuanMiLCJlczYvdXRpbGl0aWVzL2ltYWdlTWFwLmpzIiwiZXM2L3V0aWxpdGllcy92ZXJ0ZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3N0ci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2FuZ2xlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY3Jvc3MuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9mcm9tVmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9pbnZlcnNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVycC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL21heC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL21pbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbmVnYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcmFuZG9tLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zY2FsZUFuZEFkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWREaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWRMZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zdWJ0cmFjdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3RyYW5zZm9ybU1hdDMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy90cmFuc2Zvcm1NYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvdHJhbnNmb3JtUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Rpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZGl2aWRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZG90LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZnJvbVZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvaW52ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2xlcnAuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9tYXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9taW4uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L25lZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L25vcm1hbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3JhbmRvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc2NhbGVBbmRBZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zcXVhcmVkRGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zcXVhcmVkTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc3VidHJhY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC90cmFuc2Zvcm1NYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvdHJhbnNmb3JtUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvcGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ00sU0FBUyxRQUFRLFVBQVIsQ0FEZjtBQUFBLElBRU0sT0FBTyxRQUFRLGVBQVIsQ0FGYjtBQUFBLElBR00sU0FBUyxRQUFRLGlCQUFSLENBSGY7QUFBQSxJQUlNLFNBQVMsUUFBUSxpQkFBUixDQUpmO0FBQUEsSUFLTSxXQUFXLFFBQVEsbUJBQVIsQ0FMakI7QUFBQSxJQU1NLFdBQVcsUUFBUSxtQkFBUixDQU5qQjtBQUFBLElBT00sYUFBYSxRQUFRLHFCQUFSLENBUG5CO0FBQUEsSUFRTSxjQUFjLFFBQVEsc0JBQVIsQ0FScEI7O0lBVU0sTTs7O0FBQ0osa0JBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQixhQUExQixFQUF5QztBQUFBOztBQUFBOztBQUd2QyxVQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFVB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RGQ7QUFFZiw2QkFBMkIseUJBRlo7QUFHZiw0QkFBMEI7QUFIWCxDQUFqQjs7O0FDN0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7OztBQUVBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFB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V0FBNUIsQ0FIb0IsQ0FHcUI7QUFDMUM7O0FBRUQsU0FBTyx5QkFBUDtBQUNEOztBQUVELFNBQVMsdUNBQVQsQ0FBaUQsSUFBakQsRUFBdUQ7QUFDckQsTUFBSSxrQ0FBa0MsSUFBdEM7O0FBRUEsTUFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLGdCQUFYLENBQWhCOztBQUVBLE1BQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNLGNBQWMsT0FBTyxPQUFQLENBQXBCOztBQUVBLHNDQUFrQyxXQUFsQztBQUNEOztBQUVELFNBQU8sK0JBQVA7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixzQkFBb0Isa0JBREw7QUFFZixzQkFBb0Isa0JBRkw7QUFHZiw4QkFBNEIsMEJBSGI7QUFJZix5Q0FBdUMscUNBSnhCO0FBS2YsZ0JBQWMsWUFMQztBQU1mLG9CQUFrQixnQkFOSDtBQU9mLDBCQUF3QixzQkFQVDtBQVFmLGdDQUE4Qiw0QkFSZjtBQVNmLGdDQUE4Qiw0QkFUZjtBQVVmLHFDQUFtQyxpQ0FWcEI7QUFXZiwyQ0FBeUM7QUFYMUIsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJTUFHRV9TSVpFID0gMTI4LFxuICAgICAgSU1BR0VfTUFQX1BBVEggPSAnL2ltYWdlTWFwJyxcbiAgICAgIElOREVYX1BBR0VfUEFUSCA9ICcvJyxcbiAgICAgIFNIQVBFU19QQUdFX1BBVEggPSAnL3NoYXBlcycsXG4gICAgICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIID0gJy9jb250YWluZXJIb3VzZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJTUFHRV9TSVpFOiBJTUFHRV9TSVpFLFxuICBJTUFHRV9NQVBfUEFUSDogSU1BR0VfTUFQX1BBVEgsXG4gIElOREVYX1BBR0VfUEFUSDogSU5ERVhfUEFHRV9QQVRILFxuICBTSEFQRVNfUEFHRV9QQVRIOiBTSEFQRVNfUEFHRV9QQVRILFxuICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIOiBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vY2FtZXJhL3pvb20nKSxcbiAgICAgIGFuZ2xlcyA9IHJlcXVpcmUoJy4vY2FtZXJhL2FuZ2xlcycpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9jYW1lcmEvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3Bvc2l0aW9uJyksXG4gICAgICBQcm9qZWN0aW9uID0gcmVxdWlyZSgnLi9jYW1lcmEvcHJvamVjdGlvbicpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioem9vbSwgY2FudmFzLCB1cGRhdGVIYW5kbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb207XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIG9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHhBbmdsZSA9IHhBeGlzQW5nbGUsICAvLy9cbiAgICAgICAgICB5QW5nbGUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHpDb29yZGluYXRlID0gLWRpc3RhbmNlLCAvLy9cbiAgICAgICAgICByb3RhdGlvbiA9IFJvdGF0aW9uLmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIHByb2plY3Rpb24gPSBQcm9qZWN0aW9uLmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWwgPSBOb3JtYWwuZnJvbVJvdGF0aW9uKHJvdGF0aW9uKTtcbiAgICBcbiAgICBpZiAodGhpcy51cGRhdGVIYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlcihyb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG4gICAgICBmb3JjZVVwZGF0ZTogdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSwgIC8vL1xuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBjYW52YXMsIHVwZGF0ZUhhbmRsZXIpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBbmdsZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi9jb29yZGluYXRlczJEJyksICAvLy9cbiAgICAgIE1vdXNlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL21vdXNlQ29vcmRpbmF0ZXMnKTtcblxuY29uc3QgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyA9IG5ldyBNb3VzZUNvb3JkaW5hdGVzKDAsIDApLFxuICAgICAgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyA9IG5ldyBBbmdsZUNvb3JkaW5hdGVzKDAsIE1hdGguUEkgLyAyKTtcblxuY2xhc3MgQW5nbGVzIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMgPSBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQXhpc0FuZ2xlKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSAtdGhpcy5hbmdsZUNvb3JkaW5hdGVzLmdldFkoKTsgLy8vXG5cbiAgICByZXR1cm4geEF4aXNBbmdsZTtcbiAgfVxuXG4gIGdldFlBeGlzQW5nbGUoKSB7XG4gICAgY29uc3QgeUF4aXNBbmdsZSA9ICt0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMuZ2V0WCgpOyAvLy9cblxuICAgIHJldHVybiB5QXhpc0FuZ2xlO1xuICB9XG4gIFxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcy5taW51cyh0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcy5tdWx0aXBsaWVkQnkoTWF0aC5QSSAvIDE4MCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLnBsdXMocmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIGFuZ2xlcyA9IG5ldyBBbmdsZXMobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxufVxuXG5jb25zdCBhbmdsZXMgPSBBbmdsZXMuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmdsZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvb3JkaW5hdGVzMkQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZ2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy54O1xuICB9XG5cbiAgZ2V0WSgpIHtcbiAgICByZXR1cm4gdGhpcy55O1xuICB9XG4gIFxuICBzZXRYKHgpIHtcbiAgICB0aGlzLnggPSB4O1xuICB9XG4gIFxuICBzZXRZKHkpIHtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgcGx1cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCArIHg7XG4gICAgeSA9IHRoaXMueSArIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBtaW51cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCAtIHg7XG4gICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cbiAgXG4gIG11bHRpcGxpZWRCeShzY2FsYXIpIHtcbiAgICBjb25zdCB4ID0gdGhpcy54ICogc2NhbGFyLFxuICAgICAgICAgIHkgPSB0aGlzLnkgKiBzY2FsYXI7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBkaXZpZGVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAvIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55IC8gc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpLFxuICAgICAgICAgIHkgPSB0aGlzLmdldFkoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt4fSwke3l9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb29yZGluYXRlczJEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb29yZGluYXRlczJEID0gcmVxdWlyZSgnLi9jb29yZGluYXRlczJEJyk7XG5cbmNsYXNzIE1vdXNlQ29vcmRpbmF0ZXMgZXh0ZW5kcyBDb29yZGluYXRlczJEIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VDb29yZGluYXRlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTU9VU0VfVVAgPSAnTU9VU0VfVVAnLFxuICAgICAgTU9VU0VfRE9XTiA9ICdNT1VTRV9ET1dOJyxcbiAgICAgIE1PVVNFX01PVkUgPSAnTU9VU0VfTU9WRScsXG4gICAgICBNT1VTRV9XSEVFTCA9ICdNT1VTRV9XSEVFTCc7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICB0aGlzLmhhbmRsZXJzID0ge307XG5cbiAgICBjb25zdCBtb3VzZUV2ZW50VHlwZXMgPSBbXG4gICAgICAgICAgICBNT1VTRV9VUCxcbiAgICAgICAgICAgIE1PVVNFX0RPV04sXG4gICAgICAgICAgICBNT1VTRV9NT1ZFLFxuICAgICAgICAgICAgTU9VU0VfV0hFRUxcbiAgICAgICAgICBdO1xuXG4gICAgbW91c2VFdmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24obW91c2VFdmVudFR5cGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdID0gW107XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfVVAsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VFdmVudChNT1VTRV9ET1dOLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfTU9WRSwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdET01Nb3VzZVNjcm9sbCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICB9XG5cbiAgYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9VUCwgbW91c2VVcEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9ET1dOLCBtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfTU9WRSwgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfV0hFRUwsIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgdHlwZSwgaGFuZGxlcikge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VFdmVudChtb3VzZUV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5jYW52YXMubW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZUV2ZW50SGFuZGxlcikge1xuICAgICAgbW91c2VFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxFdmVudChldmVudCkge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxFdmVudFR5cGUgPSBNT1VTRV9XSEVFTCxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VXaGVlbEV2ZW50VHlwZV0sXG4gICAgICAgICAgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpKTsgLy8vXG5cbiAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpIHtcbiAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXIobW91c2VFdmVudFR5cGUsIG1vdXNlRXZlbnRIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV07XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMucHVzaChtb3VzZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoY2FudmFzKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vZ2wvbWF0NCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgaW52ZXJ0LCB0cmFuc3Bvc2UgfSA9IG1hdDQ7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Sb3RhdGlvbihyb3RhdGlvbikge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwobWF0NCk7XG5cbiAgICBpbnZlcnQobWF0NCwgcm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIHRyYW5zcG9zZShtYXQ0LCBtYXQ0KTtcbiAgICBcbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vZ2wvbWF0NCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgdHJhbnNsYXRlIH0gPSBtYXQ0O1xuXG5jb25zdCBkZWZhdWx0WENvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFlDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRaQ29vcmRpbmF0ZSA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0NCkge1xuICAgIHRoaXMubWF0NCA9IG1hdDQ7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXQ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSkgeyByZXR1cm4gUG9zaXRpb24uZnJvbUNvb3JkaW5hdGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB6Q29vcmRpbmF0ZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKHhDb29yZGluYXRlID0gZGVmYXVsdFhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSA9IGRlZmF1bHRZQ29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgPSBkZWZhdWx0WkNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24obWF0NCk7XG5cbiAgICB0cmFuc2xhdGUobWF0NCwgbWF0NCwgWyB4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIHpDb29yZGluYXRlIF0pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9zaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCcuLi9nbC9tYXQ0JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBjcmVhdGUsIHBlcnNwZWN0aXZlIH0gPSBtYXQ0LFxuICAgICAgeyBGSUVMRF9PRl9WSUVXLCBaX05FQVIsIFpfRkFSIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFByb2plY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLFxuICAgICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgek5lYXIgPSBaX05FQVIsXG4gICAgICAgICAgekZhciA9IFpfRkFSLFxuICAgICAgICAgIHByb2plY3Rpb24gPSBuZXcgUHJvamVjdGlvbihtYXQ0KTtcblxuICAgIHBlcnNwZWN0aXZlKG1hdDQsIGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gICAgcmV0dXJuIHByb2plY3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vZ2wvbWF0NCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgcm90YXRlIH0gPSBtYXQ0O1xuXG5jb25zdCBkZWZhdWx0WEFuZ2xlID0gMC4wLFxuICAgICAgZGVmYXVsdFlBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRaQW5nbGUgPSAwLjA7XG5cbmNsYXNzIFJvdGF0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0NCkge1xuICAgIHRoaXMubWF0NCA9IG1hdDQ7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXQ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlID0gZGVmYXVsdFhBbmdsZSwgeUFuZ2xlID0gZGVmYXVsdFlBbmdsZSwgekFuZ2xlID0gZGVmYXVsdFpBbmdsZSkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbiA9IG5ldyBSb3RhdGlvbihtYXQ0KTtcblxuICAgIHJvdGF0ZShtYXQ0LCBtYXQ0LCB4QW5nbGUsIFsxLCAwLCAwXSk7XG4gICAgcm90YXRlKG1hdDQsIG1hdDQsIHlBbmdsZSwgWzAsIDEsIDBdKTtcbiAgICByb3RhdGUobWF0NCwgbWF0NCwgekFuZ2xlLCBbMCwgMCwgMV0pO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm90YXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1JTklNVU1fRElTVEFOQ0UgfSA9IGNvbnN0YW50czsgXG5cbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIHRoaXMuZGlzdGFuY2UgKz0gZGVsdGEgKiA1OyAgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoTUlOSU1VTV9ESVNUQU5DRSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IGluaXRpYWxEaXN0YW5jZSA9IC1pbml0aWFsUG9zaXRpb25bMl0sIC8vL1xuICAgICAgICAgIGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBab29tO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9wcm9ncmFtJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi90ZXh0dXJlJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9zaGFkZXInKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL21hdHJpeCcpLFxuICAgICAgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2RlcHRoJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vbW91c2UnKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0LmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBub3JtYWwuZ2V0TWF0cml4KCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0TWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHNoYWRlci5nZXRDb3VudCgpO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMoY291bnQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQ7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcjogY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXI6IGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXI6IGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlcjogYmluZEJ1ZmZlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyOiBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXI6IGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0RGVwdGggPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBkZWZhdWx0RGVwdGgpIHsgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcCA9IERFUFRIX1RFU1Q7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXApO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEZXB0aEZ1bmN0aW9uKCkge1xuICBjb25zdCB7IExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBmdW5jID0gTEVRVUFMO1xuICBcbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhmdW5jKTsgXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGVhckRlcHRoOiBjbGVhckRlcHRoLFxuICBjbGVhckRlcHRoQnVmZmVyOiBjbGVhckRlcHRoQnVmZmVyLFxuICBlbmFibGVEZXB0aFRlc3Rpbmc6IGVuYWJsZURlcHRoVGVzdGluZyxcbiAgZW5hYmxlRGVwdGhGdW5jdGlvbjogZW5hYmxlRGVwdGhGdW5jdGlvblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGx5TWF0cml4OiBhcHBseU1hdHJpeFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTW91c2VDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uLy4uL21vdXNlQ29vcmRpbmF0ZXMnKTtcblxubGV0IGhvcml6b250YWxPZmZzZXQgPSA1MTIsIC8vL1xuICAgIHZlcnRpY2FsT2Zmc2V0ID0gMzIwOyAvLy9cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB4ID0gKyhldmVudC5jbGllbnRYIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0IC0gaG9yaXpvbnRhbE9mZnNldCksICAvLy9cbiAgICAgICAgeSA9IC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wIC0gdmVydGljYWxPZmZzZXQpLCAvLy9cbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG5ldyBNb3VzZUNvb3JkaW5hdGVzKHgsIHkpO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbW91c2VDb29yZGluYXRlc0Zyb21FdmVudDogbW91c2VDb29yZGluYXRlc0Zyb21FdmVudFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlUHJvZ3JhbTogY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbTogdXNlUHJvZ3JhbVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVNoYWRlcjogY3JlYXRlU2hhZGVyLFxuICBjcmVhdGVWZXJ0ZXhTaGFkZXI6IGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXI6IGNyZWF0ZUZyYWdtZW50U2hhZGVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlKSB7XG4gIGNvbnN0IHsgVEVYVFVSRV8yRCwgUkdCQSwgVU5TSUdORURfQllURSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBsZXZlbCA9IDAsXG4gICAgICAgIGludGVybmFsRm9ybWF0ID0gUkdCQSxcbiAgICAgICAgZm9ybWF0ID0gUkdCQSxcbiAgICAgICAgdHlwZSA9IFVOU0lHTkVEX0JZVEUsXG4gICAgICAgIHRleHR1cmUgPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRChURVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UpO1xuXG4gIHRoaXMuY29udGV4dC5nZW5lcmF0ZU1pcG1hcChURVhUVVJFXzJEKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVUZXh0dXJlKHRhcmdldCkgeyB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVUZXh0dXJlOiBjcmVhdGVUZXh0dXJlLFxuICBhY3RpdmF0ZVRleHR1cmU6IGFjdGl2YXRlVGV4dHVyZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ1lMSU5ERVJfRkFDRVMgPSAxNixcbiAgICAgIE1JTklNVU1fRElTVEFOQ0UgPSAxMCxcbiAgICAgIEZJRUxEX09GX1ZJRVcgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICBaX05FQVIgPSAxLFxuICAgICAgWl9GQVIgPSAxMDAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgWl9GQVI6IFpfRkFSLFxuICBaX05FQVI6IFpfTkVBUixcbiAgRklFTERfT0ZfVklFVzogRklFTERfT0ZfVklFVyxcbiAgQ1lMSU5ERVJfRkFDRVM6IENZTElOREVSX0ZBQ0VTLFxuICBNSU5JTVVNX0RJU1RBTkNFOiBNSU5JTVVNX0RJU1RBTkNFXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb29yZGluYXRlczJEIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuICBcbiAgc2V0WCh4KSB7XG4gICAgdGhpcy54ID0geDtcbiAgfVxuICBcbiAgc2V0WSh5KSB7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHBsdXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggKyB4O1xuICAgIHkgPSB0aGlzLnkgKyB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgbWludXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggLSB4O1xuICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG4gIFxuICBtdWx0aXBsaWVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55ICogc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgZGl2aWRlZEJ5KHNjYWxhcikge1xuICAgIGNvbnN0IHggPSB0aGlzLnggLyBzY2FsYXIsXG4gICAgICAgICAgeSA9IHRoaXMueSAvIHNjYWxhcjtcblxuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXMyRCh4LCB5KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKSxcbiAgICAgICAgICB5ID0gdGhpcy5nZXRZKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7eH0sJHt5fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29vcmRpbmF0ZXMyRDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcbiAgXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdib29sZWFuJykge1xuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcbiAgXG4gICAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSwgW10pO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgZWxlbWVudC51cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIENvbG91ckVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gdmVydGV4Tm9ybWFsRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleERhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4RGF0YSh0aGlzLnZlcnRleEluZGV4RGF0YSk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3VyRGF0YSh0aGlzLnZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7ICAvLy9cbiAgICBjb25zdCBjb2xvdXJFbGVtZW50ID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgVGV4dHVyZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleERhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodGhpcy52ZXJ0ZXhJbmRleERhdGEpOyAgICBcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7ICAvLy8gXG4gICAgY29uc3QgdGV4dHVyZUVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoYXBlczogcmVxdWlyZSgnLi9leGFtcGxlcy9zaGFwZXMnKSxcbiAgY29udGFpbmVySG91c2U6IHJlcXVpcmUoJy4vZXhhbXBsZXMvY29udGFpbmVySG91c2UnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSwgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YX0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG5cbiAgICAgICAgMC4wLCAwLjAsIDEuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCwgMSxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCwgMSxcbiAgICAgICAgMC4wLCAxLjAsIDEuMCwgMSxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLCAxLFxuXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsIDEsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsIDEsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsIDEsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsIDEsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCwgMSxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCwgMSxcblxuICAgICAgICAxLjAsIDAuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLCAxLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLCAxLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsIDEsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsIDEsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsIDEsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsIDEsXG5cbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZlcnRleEluZGV4RGF0YTogdmVydGV4SW5kZXhEYXRhLFxuICB2ZXJ0ZXhOb3JtYWxEYXRhOiB2ZXJ0ZXhOb3JtYWxEYXRhLFxuICBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhOiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN1Ym9pZDtcblxuY2xhc3MgQ29sb3VyQ3Vib2lkIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCksXG4gICAgICAgICAgY29sb3VyQ3Vib2lkID0gQ29sb3VyRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJDdWJvaWQsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyQ3Vib2lkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyQ3Vib2lkO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGNvbG91cikge1xuICBsZXQgdmVydGV4Q29sb3VyRGF0YSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIHZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhLmNvbmNhdChjb2xvdXIpO1xuICB9XG5cbiAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgVGV4dHVyZUVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L3RleHR1cmUnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIFRleHR1cmVDdWJvaWQgZXh0ZW5kcyBUZXh0dXJlRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGltYWdlTmFtZSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQpLFxuICAgICAgICAgIHRleHR1cmVDdWJvaWQgPSBUZXh0dXJlRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ3Vib2lkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN1Ym9pZDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGltYWdlTmFtZSkge1xuICBjb25zdCBpbWFnZU5hbWVzID0gW1xuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBDWUxJTkRFUl9GQUNFUyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhfSA9IHZlcnRleFV0aWxpdGllcztcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZUluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgIHZlcnRleEluZGV4RGF0YSA9IGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmVydGV4SW5kZXhEYXRhOiB2ZXJ0ZXhJbmRleERhdGEsXG4gIHZlcnRleE5vcm1hbERhdGE6IHZlcnRleE5vcm1hbERhdGEsXG4gIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGE6IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGFcbn07XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvblZlY3RvcnMgPSBbXSxcbiAgICAgICAgZmFjZXMgPSBDWUxJTkRFUl9GQUNFUyxcbiAgICAgICAgc3RlcCA9IDIgKiBNYXRoLlBJIC8gZmFjZXM7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGZhY2VzOyBjb3VudCsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSBzdGVwICogY291bnQsXG4gICAgICAgICAgZmlyc3RYID0gKE1hdGguY29zKGFuZ2xlKSArIDEgKS8gMixcbiAgICAgICAgICBmaXJzdFkgPSAoTWF0aC5zaW4oYW5nbGUpICsgMSApLyAyLFxuICAgICAgICAgIHNlY29uZFggPSAoTWF0aC5jb3MoYW5nbGUgKyBzdGVwKSArIDEgKS8gMixcbiAgICAgICAgICBzZWNvbmRZID0gKE1hdGguc2luKGFuZ2xlICsgc3RlcCkgKyAxICkvIDIsXG4gICAgICAgICAgZmlyc3RaID0gMCxcbiAgICAgICAgICBzZWNvbmRaID0gMTtcblxuICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvblZlY3RvcnMucHVzaChbIGZpcnN0WCwgZmlyc3RZLCBmaXJzdFosIDEgXSk7XG4gICAgaW5pdGlhbFZlcnRleFBvc2l0aW9uVmVjdG9ycy5wdXNoKFsgc2Vjb25kWCwgc2Vjb25kWSwgZmlyc3RaLCAxIF0pO1xuICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvblZlY3RvcnMucHVzaChbIHNlY29uZFgsIHNlY29uZFksIHNlY29uZFosIDEgXSk7XG4gICAgaW5pdGlhbFZlcnRleFBvc2l0aW9uVmVjdG9ycy5wdXNoKFsgZmlyc3RYLCBmaXJzdFksIHNlY29uZFosIDEgXSk7XG4gIH1cblxuICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhID0gZmxhdHRlbihpbml0aWFsVmVydGV4UG9zaXRpb25WZWN0b3JzKTsgIC8vL1xuXG4gIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBDb2xvdXJFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jb2xvdXInKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN5bGluZGVyO1xuXG5jb25zdCBkZWZhdWx0T2Zmc2V0ID0gWyAxMCwgMTAsIDEwIF07XG5cbmNsYXNzIENvbG91ckN5bGluZGVyIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCByb3RhdGlvbiwgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNvbG91ciksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQsIHJvdGF0aW9uKSxcbiAgICAgICAgICBjb2xvdXJDeWxpbmRlciA9IENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3lsaW5kZXIsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJDeWxpbmRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckN5bGluZGVyO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNvbG91cikge1xuICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoID0gaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgIHZlcnRleENvbG91cnNMZW5ndGggPSBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gNCwgIC8vL1xuICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSBjb2xvdXIsXG4gICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICB9XG5cbiAgY29uc3QgdmVydGV4Q29sb3VyRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7ICAvLy9cblxuICByZXR1cm4gdmVydGV4Q29sb3VyRGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IFNjZW5lID0gcmVxdWlyZSgnLi4vc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgRnJhbWUgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2ZyYW1lJyksXG4gICAgICBGaXJzdEZsb29yID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mbG9vci9maXJzdCcpLFxuICAgICAgVGhpcmRGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3IvdGhpcmQnKSxcbiAgICAgIFNlY29uZEZsb29yID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mbG9vci9zZWNvbmQnKSxcbiAgICAgIEZvdW5kYXRpb25zID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mb3VuZGF0aW9ucycpLFxuICAgICAgTWFpbkJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbWFpbicpLFxuICAgICAgQmVkcm9vbUJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvYmVkcm9vbScpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBjb250YWluZXJIb3VzZSA9ICgpID0+IHtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0gb2Zmc2V0PXtbIC0xOCwgLTE2LCAwIF19PlxuICAgICAgPENhbWVyYSBpbml0aWFsUG9zaXRpb249e1sgMCwgMCwgLTE1MCBdfSAvPlxuICAgICAgPEZvdW5kYXRpb25zIC8+XG4gICAgICA8Rmlyc3RGbG9vciAvPlxuICAgICAgPFNlY29uZEZsb29yIC8+XG4gICAgICA8VGhpcmRGbG9vciAvPlxuICAgICAgPE1haW5CYWxjb255IC8+XG4gICAgICA8QmVkcm9vbUJhbGNvbnkgLz5cbiAgICAgIDxGcmFtZSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVySG91c2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJhaWxpbmcgPSByZXF1aXJlKCcuLi9iYWxjb255L3JhaWxpbmcnKSxcbiAgICAgIEJhbGNvbnlTZWN0aW9uID0gcmVxdWlyZSgnLi4vYmFsY29ueS9zZWN0aW9uJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jb25zdCBCZWRyb29tQmFsY29ueSA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyAwLCAxNiwgMTkgXX0gLz4sXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgNCwgMTYsIDE5IF19IC8+LFxuXG4gIDxSYWlsaW5nIG9mZnNldD17WzAsIDMyIC0gdGhpY2tuZXNzLCAxOV19IGxlbmd0aD17OH0gLz4sXG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gQmVkcm9vbUJhbGNvbnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJhaWxpbmcgPSByZXF1aXJlKCcuLi9iYWxjb255L3JhaWxpbmcnKSxcbiAgICAgIEJhbGNvbnlTZWN0aW9uID0gcmVxdWlyZSgnLi4vYmFsY29ueS9zZWN0aW9uJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jb25zdCBNYWluQmFsY29ueSA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyA0MCwgIDAsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDQ0LCAgMCwgMTkgXX0gLz4sXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgNDAsIDE2LCAxOSBdfSAvPixcbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyA0NCwgMTYsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDM2LCAxNiwgMTkgXX0gLz4sXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgMzIsIDE2LCAxOSBdfSAvPixcbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyAyOCwgMTYsIDE5IF19IC8+LFxuXG4gIDxSYWlsaW5nIG9mZnNldD17WzIwLCAwLCAxOV19IGxlbmd0aD17Mjh9IC8+LFxuICA8UmFpbGluZyBvZmZzZXQ9e1syOCwgMzIgLSB0aGlja25lc3MsIDE5XX0gbGVuZ3RoPXsyMH0gLz4sXG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFpbkJhbGNvbnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi8uLi8uLi9nbC92ZWMzJyksXG4gICAgICBUb3BSYWlsID0gcmVxdWlyZSgnLi9yYWlsaW5nL3RvcFJhaWwnKSxcbiAgICAgIFVwcmlnaHRzID0gcmVxdWlyZSgnLi9yYWlsaW5nL3VwcmlnaHRzJyk7XG5cbmNvbnN0IHsgYWRkIH0gPSB2ZWMzLFxuICAgICAgeyB0aGlja25lc3MgfSA9IFRvcFJhaWwsXG4gICAgICBoZWlnaHQgPSAzO1xuXG5jb25zdCBSYWlsaW5nID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIGxlbmd0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxUb3BSYWlsIG9mZnNldD17YWRkKG9mZnNldCwgWyAwLCAwLCBoZWlnaHQgXSl9IGxlbmd0aD17bGVuZ3RofSAvPixcbiAgICA8VXByaWdodHMgb2Zmc2V0PXtvZmZzZXR9IGhlaWdodD17aGVpZ2h0fSBsZW5ndGg9e2xlbmd0aH0gLz5cblxuICBdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFpbGluZztcblxuT2JqZWN0LmFzc2lnbihSYWlsaW5nLCB7XG4gIHRoaWNrbmVzczogdGhpY2tuZXNzXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2N1Ym9pZC9jb2xvdXInKTtcblxuY29uc3QgaGVpZ2h0ID0gMC4xLFxuICAgICAgdGhpY2tuZXNzID0gMC40LFxuICAgICAgY29sb3VyID0gWyAwLjUsIDAuNSwgMC41LCAxXTtcblxuY29uc3QgVG9wUmFpbCA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCBsZW5ndGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgZGVwdGggPSB0aGlja25lc3M7IC8vL1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyQ3Vib2lkIGNvbG91cj17Y29sb3VyfSBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICk7XG59O1xuXG5PYmplY3QuYXNzaWduKFRvcFJhaWwsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcFJhaWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91ckN5bGluZGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2N5bGluZGVyL2NvbG91cicpO1xuXG5jb25zdCB0aGlja25lc3MgPSAwLjEyNSxcbiAgICAgIGNvbG91ciA9IFsgMC41LCAwLjUsIDAuNSwgMV07XG5cbmNvbnN0IFVwcmlnaHQgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCwgaGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB3aWR0aCA9IHRoaWNrbmVzcywgLy8vXG4gICAgICAgIGRlcHRoID0gdGhpY2tuZXNzOyAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91ckN5bGluZGVyIGNvbG91cj17Y29sb3VyfSBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsL3ZlYzMnKSxcbiAgICAgIFVwcmlnaHQgPSByZXF1aXJlKCcuL3VwcmlnaHQnKTtcblxuY29uc3QgeyBhZGQgfSA9IHZlYzM7XG5cbmNvbnN0IFVwcmlnaHRzID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIGhlaWdodCwgbGVuZ3RoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBlbGVtZW50cyA9IFtdLFxuICAgICAgICBzdGVwID0gMC41LFxuICAgICAgICBjb3VudCA9IGxlbmd0aCAvIHN0ZXA7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleDwgY291bnQ7IGluZGV4KyspIHtcbiAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICA8VXByaWdodCBvZmZzZXQ9e2FkZChvZmZzZXQsIFsgc3RlcCAqIGluZGV4LCAwLCAwIF0pfSBoZWlnaHQ9e2hlaWdodH0gLz5cblxuICAgIClcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi8uLi8uLi9nbC92ZWMzJyksXG4gICAgICBFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2UnKSxcbiAgICAgIE9wZW5NZXNoID0gcmVxdWlyZSgnLi9zZWN0aW9uL29wZW5NZXNoJyksXG4gICAgICBMb25nRWRnZSA9IHJlcXVpcmUoJy4vc2VjdGlvbi9lZGdlL2xvbmcnKSxcbiAgICAgIFNob3J0RWRnZSA9IHJlcXVpcmUoJy4vc2VjdGlvbi9lZGdlL3Nob3J0Jyk7XG5cbmNvbnN0IHsgYWRkIH0gPSB2ZWMzLFxuICAgICAgd2lkdGggPSA0LFxuICAgICAgZGVwdGggPSAxNjtcblxuY29uc3QgeyBoZWlnaHQsIHRoaWNrbmVzcyB9ID0gRWRnZTtcblxuY29uc3QgQmFsY29ueVNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxMb25nRWRnZSBvZmZzZXQ9e2FkZChvZmZzZXQsIFsgMCwgMCwgLWhlaWdodCBdKX0gZGVwdGg9e2RlcHRofSAvPixcbiAgICA8TG9uZ0VkZ2Ugb2Zmc2V0PXthZGQob2Zmc2V0LCBbIHdpZHRoLXRoaWNrbmVzcywgMCwgLWhlaWdodCBdKX0gZGVwdGg9e2RlcHRofSAvPixcbiAgICA8U2hvcnRFZGdlIG9mZnNldD17YWRkKG9mZnNldCwgWyAwLCAwLCAtaGVpZ2h0IF0pfSB3aWR0aD17d2lkdGh9IC8+LFxuICAgIDxTaG9ydEVkZ2Ugb2Zmc2V0PXthZGQob2Zmc2V0LCBbIDAsIDE2LXRoaWNrbmVzcywgLWhlaWdodCBdKX0gd2lkdGg9e3dpZHRofSAvPixcbiAgICA8T3Blbk1lc2ggb2Zmc2V0PXthZGQob2Zmc2V0LCBbIHRoaWNrbmVzcywgdGhpY2tuZXNzLCAwIF0pfSB3aWR0aD17d2lkdGggLSAyICogdGhpY2tuZXNzfSBkZXB0aD17ZGVwdGggLSAyICogdGhpY2tuZXNzfSAvPlxuXG4gIF0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWxjb255U2VjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZUN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jdWJvaWQvdGV4dHVyZScpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjI1LFxuICAgICAgdGhpY2tuZXNzID0gMC4xO1xuXG5jb25zdCBFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoLCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVDdWJvaWQgaW1hZ2VOYW1lPVwicnVzdHlTdGVlbC5qcGdcIiBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICk7XG59O1xuXG5PYmplY3QuYXNzaWduKEVkZ2UsIHtcbiAgaGVpZ2h0OiBoZWlnaHQsXG4gIHRoaWNrbmVzczogdGhpY2tuZXNzXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gRWRnZTtcblxuY29uc3QgTG9uZ0VkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCwgZGVwdGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gdGhpY2tuZXNzOyAgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxFZGdlIG9mZnNldD17b2Zmc2V0fSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb25nRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IEVkZ2U7XG5cbmNvbnN0IFNob3J0RWRnZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCB3aWR0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgZGVwdGggPSB0aGlja25lc3M7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPEVkZ2Ugb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNob3J0RWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsL3ZlYzMnKSxcbiAgICAgIENvbG91ckN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jdWJvaWQvY29sb3VyJyksXG4gICAgICBDb2xvdXJDeWxpbmRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jeWxpbmRlci9jb2xvdXInKTtcblxuY29uc3QgeyBhZGQgfSA9IHZlYzMsXG4gICAgICBvdmVyYWxsSGVpZ2h0ID0gMC4yNSxcbiAgICAgIG92ZXJhbGxUaGlja25lc3MgPSAwLjAyNSxcbiAgICAgIHdpZHRod2lzZUNvdW50ID0gMTAsXG4gICAgICBkZXB0aHdpc2VDb3VudCA9IDUsXG4gICAgICBjb2xvdXIgPSBbIDAuNiwgMC42LCAwLjYsIDEwIF07XG5cbmNvbnN0IE9wZW5NZXNoID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoLCBkZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgb3ZlcmFsbFdpZHRoID0gd2lkdGgsIC8vL1xuICAgICAgICBvdmVyYWxsRGVwdGggPSBkZXB0aCwgLy8vXG4gICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHdpZHRod2lzZUNvdW50OyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3RlcCA9IG92ZXJhbGxXaWR0aCAvIHdpZHRod2lzZUNvdW50LFxuICAgICAgICAgIHdpZHRoID0gb3ZlcmFsbFRoaWNrbmVzcywgIC8vL1xuICAgICAgICAgIGRlcHRoID0gb3ZlcmFsbERlcHRoLFxuICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQ7XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICA8Q29sb3VyQ3Vib2lkIGNvbG91cj17Y29sb3VyfSBvZmZzZXQ9e2FkZChvZmZzZXQsIFsgc3RlcCAqIGluZGV4LCAwLCAtaGVpZ2h0IF0pfSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG5cbiAgICApXG4gIH1cblxuICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgZGVwdGh3aXNlQ291bnQ7IGluZGV4KyspIHtcbiAgICBjb25zdCBzdGVwID0gb3ZlcmFsbERlcHRoIC8gZGVwdGh3aXNlQ291bnQsXG4gICAgICAgICAgZGlhbWV0ZXIgPSBvdmVyYWxsSGVpZ2h0IC8gMiwgLy8vXG4gICAgICAgICAgd2lkdGggPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgZGVwdGggPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbFdpZHRoOyAgLy8vXG5cbiAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICA8Q29sb3VyQ3lsaW5kZXIgY29sb3VyPXtjb2xvdXJ9IG9mZnNldD17YWRkKG9mZnNldCwgWyAwLCBzdGVwICogaW5kZXgsIC1kaWFtZXRlci8yIF0pfSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gaGVpZ2h0PXtoZWlnaHR9IHJvdGF0aW9uPXtbIDAsIDkwLCAwIF19IC8+XG5cbiAgICApXG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9wZW5NZXNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlQ3Vib2lkID0gcmVxdWlyZSgnLi4vY29tbW9uL2N1Ym9pZC90ZXh0dXJlJyk7XG5cbmNvbnN0IENvbmNyZXRlU2xhYiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCB3aWR0aCwgZGVwdGgsIGhlaWdodCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVDdWJvaWQgaW1hZ2VOYW1lPVwiY29uY3JldGUuanBnXCIgb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25jcmV0ZVNsYWI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91ckN1Ym9pZCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jdWJvaWQvY29sb3VyJyk7XG5cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCB3aWR0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91ckN1Ym9pZCBjb2xvdXI9e1sxLCAxLCAxLCAxXX0gb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXt3aWR0aH0gZGVwdGg9ezh9IGhlaWdodD17OS41fSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhaW5lcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyJyk7XG5cbmNvbnN0IEZvcnR5Rm9vdENvbnRhaW5lciA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29udGFpbmVyIG9mZnNldD17b2Zmc2V0fSB3aWR0aD17NDB9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ydHlGb290Q29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXInKTtcblxuY29uc3QgVHdlbnR5Rm9vdENvbnRhaW5lciA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29udGFpbmVyIG9mZnNldD17b2Zmc2V0fSB3aWR0aD17MjB9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlbnR5Rm9vdENvbnRhaW5lcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRm9ydHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL2ZvcnR5Rm9vdCcpLFxuICAgICAgVHdlbnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci90d2VudHlGb290Jyk7XG5cbmNvbnN0IEZpcnN0Rmxvb3IgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxGb3J0eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgMCwgMF19IC8+LFxuICA8Rm9ydHlGb290Q29udGFpbmVyIG9mZnNldD17WzgsIDgsIDBdfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgMTYsIDBdfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgMjQsIDBdfSAvPixcblxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXJzdEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGb3J0eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvZm9ydHlGb290JyksXG4gICAgICBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL3R3ZW50eUZvb3QnKTtcblxuY29uc3QgU2Vjb25kRmxvb3IgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxGb3J0eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbMCwgMCwgOS41XX0gLz4sXG4gIDxGb3J0eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbMCwgOCwgOS41XX0gLz4sXG4gIDxUd2VudHlGb290Q29udGFpbmVyIG9mZnNldD17WzgsIDE2LCA5LjVdfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgMjQsIDkuNV19IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlY29uZEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL3R3ZW50eUZvb3QnKTtcblxuY29uc3QgVGhpcmRGbG9vciA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbMCwgIDAsIDE5XX0gLz4sXG4gIDxUd2VudHlGb290Q29udGFpbmVyIG9mZnNldD17WzAsICA4LCAxOV19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAxNiwgMTldfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgMjQsIDE5XX0gLz4sXG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhpcmRGbG9vcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uY3JldGVTbGFiID0gcmVxdWlyZSgnLi9jb25jcmV0ZVNsYWInKTtcblxuY29uc3QgRm91bmRhdGlvbnMgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxDb25jcmV0ZVNsYWIgb2Zmc2V0PXsgWyAtMC41LCAtMC41LCAtMV0gfSB3aWR0aD17MTIuNX0gZGVwdGg9ezMzfSBoZWlnaHQ9ezF9IC8+LFxuICA8Q29uY3JldGVTbGFiIG9mZnNldD17IFsgICAyNCwgLTAuNSwgLTFdIH0gd2lkdGg9ezI0LjR9IGRlcHRoPXszM30gaGVpZ2h0PXsxfSAvPixcblxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3VuZGF0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3RlZWxTZWN0aW9uID0gcmVxdWlyZSgnLi9zdGVlbFNlY3Rpb24nKTtcblxuY29uc3QgRnJhbWUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB3aWR0aCA9IDQ4LFxuICAgICAgICBkZXB0aCA9IDMyLFxuICAgICAgICBoZWlnaHQgPSAyOTtcblxuICByZXR1cm4gKFtcblxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyAgICAgIC0wLjUsICAgICAgLTAuNSwgMCBdIH0gd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gLz4sXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbICAgICAgLTAuNSwgZGVwdGgtMC41LCAwIF0gfSB3aWR0aD17MX0gZGVwdGg9ezF9IGhlaWdodD17aGVpZ2h0fSAvPixcbiAgICA8U3RlZWxTZWN0aW9uIG9mZnNldD17IFsgd2lkdGgtMC41LCBkZXB0aC0wLjUsIDAgXSB9IHdpZHRoPXsxfSBkZXB0aD17MX0gaGVpZ2h0PXtoZWlnaHR9IC8+LFxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyB3aWR0aC0wLjUsICAgICAgLTAuNSwgMCBdIH0gd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gLz4sXG5cbiAgICA8U3RlZWxTZWN0aW9uIG9mZnNldD17IFsgICAgICAtMC41LCAtMC41LCBoZWlnaHQtMSBdIH0gd2lkdGg9ezF9IGRlcHRoPXtkZXB0aH0gaGVpZ2h0PXsxfSAvPixcbiAgICA8U3RlZWxTZWN0aW9uIG9mZnNldD17IFsgd2lkdGgtMC41LCAtMC41LCBoZWlnaHQtMSBdIH0gd2lkdGg9ezF9IGRlcHRoPXtkZXB0aH0gaGVpZ2h0PXsxfSAvPixcblxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyAtMC41LCAgICAgIC0wLjUsIGhlaWdodC0xIF0gfSB3aWR0aD17d2lkdGh9IGRlcHRoPXsxfSBoZWlnaHQ9ezF9IC8+LFxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyAtMC41LCBkZXB0aC0wLjUsIGhlaWdodC0xIF0gfSB3aWR0aD17d2lkdGh9IGRlcHRoPXsxfSBoZWlnaHQ9ezF9IC8+LFxuXG4gIF0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGcmFtZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZUN1Ym9pZCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jdWJvaWQvdGV4dHVyZScpO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCwgd2lkdGgsIGRlcHRoLCBoZWlnaHQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxUZXh0dXJlQ3Vib2lkIGltYWdlTmFtZT1cInJ1c3R5U3RlZWwuanBnXCIgb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGVlbFNlY3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBTY2VuZSA9IHJlcXVpcmUoJy4uL3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIFRleHR1cmVDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi9jdWJvaWQvdGV4dHVyZScpLFxuICAgICAgQ29sb3VyQ3lsaW5kZXIgPSByZXF1aXJlKCcuL2NvbW1vbi9jeWxpbmRlci9jb2xvdXInKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3Qgc2hhcGVzID0gKCkgPT4ge1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBvZmZzZXQ9e1sgMCwgMCwgMCBdfT5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbFBvc2l0aW9uPXtbIDAsIDAsIC0yMCBdfSAvPlxuICAgICAgPFRleHR1cmVDdWJvaWQgd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9ezF9IGltYWdlTmFtZT1cImJyaWNrcy5qcGdcIiAvPlxuICAgICAgPENvbG91ckN5bGluZGVyIHdpZHRoPXsxfSBkZXB0aD17MX0gaGVpZ2h0PXs1fSBjb2xvdXI9e1sgMSwgMCwgMCwgMSBdfSByb3RhdGlvbj17WyAwLCA5MCwgMCBdfSBvZmZzZXQ9e1sgMiwgMCwgMCBdfSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhcGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdDQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCdnbC12ZWMzJyk7XG5cbmZ1bmN0aW9uIGFkZCh2ZWMxLCB2ZWMyKSB7XG4gIGNvbnN0IHZlYyA9IFtdO1xuXG4gIHZlYzMuYWRkKHZlYywgdmVjMSwgdmVjMik7XG5cbiAgcmV0dXJuIHZlYztcbn1cblxuZnVuY3Rpb24gc3VidHJhY3QodmVjMSwgdmVjMikge1xuICBjb25zdCB2ZWMgPSBbXTtcblxuICB2ZWMzLnN1YnRyYWN0KHZlYywgdmVjMSwgdmVjMik7XG5cbiAgcmV0dXJuIHZlYztcbn1cblxuZnVuY3Rpb24gY3Jvc3ModmVjMSwgdmVjMikge1xuICBjb25zdCB2ZWMgPSBbXTtcblxuICB2ZWMzLmNyb3NzKHZlYywgdmVjMSwgdmVjMik7XG5cbiAgcmV0dXJuIHZlYztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogYWRkLFxuICBzdWJ0cmFjdDogc3VidHJhY3QsXG4gIGNyb3NzOiBjcm9zcyxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzQgPSByZXF1aXJlKCdnbC12ZWM0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVjNDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCcuL3JlYWN0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdSZWFjdCcsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3Q7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb29yZGluYXRlczJEID0gcmVxdWlyZSgnLi9jb29yZGluYXRlczJEJyk7XG5cbmNsYXNzIE1vdXNlQ29vcmRpbmF0ZXMgZXh0ZW5kcyBDb29yZGluYXRlczJEIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VDb29yZGluYXRlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZsYXR0ZW4sIGd1YXJhbnRlZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudE9yRWxlbWVudHM7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50czogY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRPckVsZW1lbnRzID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudE9yRWxlbWVudHMgPSBmdW5jKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gZmxhdHRlbihndWFyYW50ZWUoZWxlbWVudE9yRWxlbWVudHMpKTsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcblxuICAgIHRoaXMudmVydGV4UG9zaXRpb25EYXRhID0gW107XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gW107XG4gICAgdGhpcy52ZXJ0ZXhJbmRleERhdGEgPSBbXTtcbiAgICB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCA9IC0xOyAvLy9cbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4RGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4RGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggKyAxO1xuXG4gICAgdmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhLm1hcChmdW5jdGlvbih2ZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ICsgb2Zmc2V0O1xuICAgIH0pO1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCwgLi4udmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4RGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG4gICAgXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDM7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBPZmZzZXQgPSByZXF1aXJlKCcuL3NjZW5lL29mZnNldCcpLFxuICAgICAgQ29sb3VyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRWZWMzLCBjYW52YXMsIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vZmZzZXRWZWMzID0gb2Zmc2V0VmVjMztcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldE9mZnNldFZlYzMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0VmVjMztcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clJlbmRlcmVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlclByb2dyYW0gPSB0aGlzLmNvbG91clJlbmRlcmVyLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtID0gdGhpcy50ZXh0dXJlUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0oY29sb3VyUmVuZGVyZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbSh0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlUmVuZGVyZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihyb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCkge1xuICAgIGNvbnN0IG9mZnNldCA9IE9mZnNldC5mcm9tVmVjMyh0aGlzLm9mZnNldFZlYzMpO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGltYWdlTWFwLCBvZmZzZXQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgb2Zmc2V0VmVjMyA9IG9mZnNldCwgIC8vL1xuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IENvbG91clNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIG9mZnNldFZlYzMsIGNhbnZhcywgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9KTtcblxuICAgIGlmIChpbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG4gICAgY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vZ2wvbWF0NCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgdHJhbnNsYXRlIH0gPSBtYXQ0O1xuXG5jbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlYzModmVjMykge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KG1hdDQpO1xuXG4gICAgdHJhbnNsYXRlKG1hdDQsIG1hdDQsIHZlYzMpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdW5pZm9ybScpLFxuICAgICAgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4JyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudCcpO1xuXG5jb25zdCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZSxcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyRGF0YSkge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleENvbG91ckRhdGEsIHZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyQnVmZmVyLCB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBuZXcgQ29sb3VyU2hhZGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckRhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJTaGFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSA9IGxpZ2h0aW5nU291cmNlLFxuICAgICAgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBBdHRyaWJ1dGVMb2NhdGlvbnModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbk9iamVjdC5hc3NpZ24oQXR0cmlidXRlTG9jYXRpb25zLCB7XG4gIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZTogdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lLFxuICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lOiB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IG5vcm1hbE1hdHJpeE5hbWUgfSA9IGxpZ2h0aW5nU291cmNlLFxuICAgICAgeyBvZmZzZXRNYXRyaXhOYW1lLCByb3RhdGlvbk1hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb247ICAgIFxuICB9XG4gIFxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgVW5pZm9ybUxvY2F0aW9ucyhvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihVbmlmb3JtTG9jYXRpb25zLCB7XG4gIG9mZnNldE1hdHJpeE5hbWU6IG9mZnNldE1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uTWF0cml4TmFtZTogcm90YXRpb25NYXRyaXhOYW1lLFxuICBwb3NpdGlvbk1hdHJpeE5hbWU6IHBvc2l0aW9uTWF0cml4TmFtZSxcbiAgcHJvamVjdGlvbk1hdHJpeE5hbWU6IHByb2plY3Rpb25NYXRyaXhOYW1lLFxuICBub3JtYWxNYXRyaXhOYW1lOiBub3JtYWxNYXRyaXhOYW1lLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pZm9ybUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhDb2xvdXInLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lOiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhOb3JtYWwnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gYW1iaWVudExpZ2h0ICsgKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGxpZ2h0aW5nU291cmNlLCB7XG4gIG5vcm1hbE1hdHJpeE5hbWU6IG5vcm1hbE1hdHJpeE5hbWUsXG4gIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWU6IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpZ2h0aW5nU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBvZmZzZXRNYXRyaXhOYW1lID0gJ3VPZmZzZXRNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHByb2plY3Rpb25NYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJztcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldE1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiAke29mZnNldE1hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHBvc2l0aW9uU291cmNlLCB7XG4gIG9mZnNldE1hdHJpeE5hbWU6IG9mZnNldE1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uTWF0cml4TmFtZTogcm90YXRpb25NYXRyaXhOYW1lLFxuICBwb3NpdGlvbk1hdHJpeE5hbWU6IHBvc2l0aW9uTWF0cml4TmFtZSxcbiAgcHJvamVjdGlvbk1hdHJpeE5hbWU6IHByb2plY3Rpb25NYXRyaXhOYW1lLFxuICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWU6IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZVxufSk7XG4gICAgXG5tb2R1bGUuZXhwb3J0cyA9IHBvc2l0aW9uU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzYW1wbGVyTmFtZSA9ICd1U2FtcGxlcicsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24oZnJhZ21lbnRTaGFkZXJTb3VyY2UsIHtcbiAgc2FtcGxlck5hbWU6IHNhbXBsZXJOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSA9ICdhVGV4dHVyZUNvb3JkaW5hdGUnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZTogdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3VuaWZvcm0nKSxcbiAgICAgIEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXgnKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudCcpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlLFxuICAgICAgeyBzYW1wbGVyTmFtZSB9ID0gZnJhZ21lbnRTaGFkZXJTb3VyY2UsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlRGF0YSkge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlU2hhZGVyID0gbmV3IFRleHR1cmVTaGFkZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5O1xuXG5mdW5jdGlvbiBkaWNlKGVsZW1lbnRzLCBhcnJheUxlbmd0aCkge1xuICBjb25zdCBhcnJheXMgPSBbXSxcbiAgICAgICAgZWxlbWVudHNMZW5ndGggPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICAgIGFycmF5c0xlbmd0aCA9IGVsZW1lbnRzTGVuZ3RoIC8gYXJyYXlMZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5c0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBhcnJheUxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgIGFycmF5W29mZnNldF0gPSBlbGVtZW50c1tpbmRleCAqIGFycmF5TGVuZ3RoICsgb2Zmc2V0XTtcbiAgICB9XG5cbiAgICBhcnJheXNbaW5kZXhdID0gYXJyYXk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZShmdW5jdGlvbihlbGVtZW50cywgYXJyYXkpIHtcbiAgICByZXR1cm4gZWxlbWVudHMuY29uY2F0KGFycmF5KTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduKGFycmF5VXRpbGl0aWVzLCB7XG4gIGRpY2U6IGRpY2UsXG4gIGZsYXR0ZW46IGZsYXR0ZW4sXG4gIGd1YXJhbnRlZTogZ3VhcmFudGVlXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3I6IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Jcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZXBlYXRlZGx5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZShwYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNhbGxiYWNrKGltYWdlKTtcbiAgfTtcblxuICBpbWFnZS5zcmMgPSBwYXRoOyAgLy8vXG59XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMocGF0aHMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBsZW5ndGggPSBwYXRocy5sZW5ndGgsIC8vL1xuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxuICAgICAgICAgIHBhdGhzOiBwYXRoc1xuICAgICAgICB9O1xuXG4gIHJlcGVhdGVkbHkocHJlbG9hZEltYWdlQ2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2U6IHByZWxvYWRJbWFnZSxcbiAgcHJlbG9hZEltYWdlczogcHJlbG9hZEltYWdlc1xufTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlQ2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpIHtcbiAgY29uc3QgeyBpbWFnZXMsIHBhdGhzIH0gPSBjb250ZXh0LFxuICAgICAgICBwYXRoID0gcGF0aHNbaW5kZXhdLFxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlc1tpbmRleF0gPSBpbWFnZTtcblxuICBpbWFnZS5vbmxvYWQgPSBuZXh0OyAgLy8vXG5cbiAgaW1hZ2Uuc3JjID0gcGF0aDsgIC8vL1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9iaW4vY29uc3RhbnRzJyksIC8vL1xuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGltYWdlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlJyk7XG5cbmNvbnN0IHsgSU1BR0VfTUFQX1BBVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHByZWxvYWRJbWFnZSB9ID0gaW1hZ2VVdGlsaXRpZXMsXG4gICAgICB7IGltYWdlTWFwSlNPTiB9ID0gcnVudGltZUNvbmZpZ3VyYXRpb247XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaykge1xuICBjb25zdCBwYXRoID0gSU1BR0VfTUFQX1BBVEg7XG5cbiAgcHJlbG9hZEltYWdlKHBhdGgsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcykge1xuICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBpbWFnZU5hbWVzLnJlZHVjZShmdW5jdGlvbih0ZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVOYW1lKSB7XG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzLmNvbmNhdChpbWFnZU1hcEpTT05bdGV4dHVyZU5hbWVdKTtcblxuICAgICAgICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gZmxhdHRlbih0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2VNYXA6IHByZWxvYWRJbWFnZU1hcCxcbiAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXM6IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi4vZ2wvdmVjMycpLFxuICAgICAgdmVjNCA9IHJlcXVpcmUoJy4uL2dsL3ZlYzQnKSxcbiAgICAgIG1hdDQgPSByZXF1aXJlKCcuLi9nbC9tYXQ0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGRpY2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGUsIHRyYW5zbGF0ZSwgc2NhbGUsIHJvdGF0ZSB9ID0gbWF0NCxcbiAgICAgIHsgdHJhbnNmb3JtTWF0NCB9ID0gdmVjNCxcbiAgICAgIHsgc3VidHJhY3QsIGNyb3NzIH0gPSB2ZWMzO1xuXG5jb25zdCBkZWZhdWx0V2lkdGggPSAxLFxuICAgICAgZGVmYXVsdERlcHRoID0gMSxcbiAgICAgIGRlZmF1bHRIZWlnaHQgPSAxLFxuICAgICAgZGVmYXVsdE9mZnNldCA9IFsgMCwgMCwgMCBdLFxuICAgICAgZGVmYXVsdFJvdGF0aW9uID0gWyAwLCAwLCAwXTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoID0gZGVmYXVsdFdpZHRoLCBkZXB0aCA9IGRlZmF1bHREZXB0aCwgaGVpZ2h0ID0gZGVmYXVsdEhlaWdodCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCwgcm90YXRpb24gPSBkZWZhdWx0Um90YXRpb24pIHtcbiAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICB4QW5nbGUgPSByb3RhdGlvblswXSAqIE1hdGguUEkgLyAxODAsXG4gICAgICAgIHlBbmdsZSA9IHJvdGF0aW9uWzFdICogTWF0aC5QSSAvIDE4MCxcbiAgICAgICAgekFuZ2xlID0gcm90YXRpb25bMl0gKiBNYXRoLlBJIC8gMTgwO1xuXG4gIHRyYW5zbGF0ZShtYXQ0LCBtYXQ0LCBvZmZzZXQpO1xuXG4gIHJvdGF0ZShtYXQ0LCBtYXQ0LCB4QW5nbGUsIFsxLCAwLCAwXSk7XG4gIHJvdGF0ZShtYXQ0LCBtYXQ0LCB5QW5nbGUsIFswLCAxLCAwXSk7XG4gIHJvdGF0ZShtYXQ0LCBtYXQ0LCB6QW5nbGUsIFswLCAwLCAxXSk7XG5cbiAgc2NhbGUobWF0NCwgbWF0NCwgW3dpZHRoLCBkZXB0aCwgaGVpZ2h0XSk7XG5cbiAgbGV0IHZlcnRleFBvc2l0aW9ucyA9IGRpY2UoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgNCk7ICAvLy9cblxuICB2ZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybU1hdDQodmVydGV4UG9zaXRpb24sIHZlcnRleFBvc2l0aW9uLCBtYXQ0KTtcbiAgfSk7XG5cbiAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbikge1xuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbi5zbGljZSgwLCAzKTtcbiAgfSk7XG4gIFxuICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7IFxuXG4gIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSkge1xuICBjb25zdCB2ZXJ0ZXhOb3JtYWxWZWN0b3JzID0gW10sXG4gICAgICAgIGZhY2VzID0gZGljZShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCAxNik7ICAvLy9cblxuICBmYWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2UpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSBkaWNlKGZhY2UsIDQpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXhJbmRleCA9IChpbmRleCArIDMpICUgNCxcbiAgICAgICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZmlyc3RWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3RoaXJkVmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgZmlyc3RWZWN0b3IgPSBzdWJ0cmFjdChzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksICAvLy9cbiAgICAgICAgICAgIHNlY29uZFZlY3RvciA9IHN1YnRyYWN0KHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLCAgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxWZWN0b3IgPSBjcm9zcyhmaXJzdFZlY3Rvciwgc2Vjb25kVmVjdG9yKTtcblxuICAgICAgdmVydGV4Tm9ybWFsVmVjdG9ycy5wdXNoKHZlcnRleE5vcm1hbFZlY3Rvcik7XG4gICAgfVxuICB9KTtcbiAgXG4gIGNvbnN0IHZlcnRleE5vcm1hbERhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbFZlY3RvcnMpOyAvLy9cblxuICByZXR1cm4gdmVydGV4Tm9ybWFsRGF0YTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgY29uc3QgdmVydGV4SW5kZXhEYXRhID0gW10sXG4gICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLmxlbmd0aCxcbiAgICAgICAgZmFjZXNMZW5ndGggPSBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gMTY7IC8vL1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmYWNlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogNDtcblxuICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDEpO1xuICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDIpO1xuICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDIpO1xuICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDMpO1xuICB9XG5cbiAgcmV0dXJuIHZlcnRleEluZGV4RGF0YTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YTogY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLFxuICBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhOiBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhLFxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGE6IGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YVxufTtcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gYWRqb2ludDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICBvdXRbMF0gID0gIChhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFsxXSAgPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzJdICA9ICAoYTAxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbM10gID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs0XSAgPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzVdICA9ICAoYTAwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbNl0gID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs3XSAgPSAgKGEwMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTEwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzhdICA9ICAoYTEwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpKTtcbiAgICBvdXRbOV0gID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICAgIG91dFsxMF0gPSAgKGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICAgIG91dFsxM10gPSAgKGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSk7XG4gICAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICBvdXRbMTVdID0gIChhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY29weTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZGV0ZXJtaW5hbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVF1YXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB5eCA9IHkgKiB4MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHp4ID0geiAqIHgyLFxuICAgICAgICB6eSA9IHogKiB5MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcblxuICAgIG91dFs0XSA9IHl4IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzZdID0genkgKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuXG4gICAgb3V0WzhdID0genggKyB3eTtcbiAgICBvdXRbOV0gPSB6eSAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICBvdXRbMTFdID0gMDtcblxuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uIGFuZCB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgdmFyIHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHh5ID0geCAqIHkyLFxuICAgICAgICB4eiA9IHggKiB6MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHl6ID0geSAqIHoyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gICAgb3V0WzFdID0geHkgKyB3ejtcbiAgICBvdXRbMl0gPSB4eiAtIHd5O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geHkgLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICAgIG91dFs2XSA9IHl6ICsgd3g7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4eiArIHd5O1xuICAgIG91dFs5XSA9IHl6IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcnVzdHVtO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgcmwgPSAxIC8gKHJpZ2h0IC0gbGVmdCksXG4gICAgICAgIHRiID0gMSAvICh0b3AgLSBib3R0b20pLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gKG5lYXIgKiAyKSAqIHJsO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gKG5lYXIgKiAyKSAqIHRiO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICAgIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIgKiAyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cbi8qKlxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgaWRlbnRpdHk6IHJlcXVpcmUoJy4vaWRlbnRpdHknKVxuICAsIHRyYW5zcG9zZTogcmVxdWlyZSgnLi90cmFuc3Bvc2UnKVxuICAsIGludmVydDogcmVxdWlyZSgnLi9pbnZlcnQnKVxuICAsIGFkam9pbnQ6IHJlcXVpcmUoJy4vYWRqb2ludCcpXG4gICwgZGV0ZXJtaW5hbnQ6IHJlcXVpcmUoJy4vZGV0ZXJtaW5hbnQnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCB0cmFuc2xhdGU6IHJlcXVpcmUoJy4vdHJhbnNsYXRlJylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgcm90YXRlOiByZXF1aXJlKCcuL3JvdGF0ZScpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb246IHJlcXVpcmUoJy4vZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24nKVxuICAsIGZyb21RdWF0OiByZXF1aXJlKCcuL2Zyb21RdWF0JylcbiAgLCBmcnVzdHVtOiByZXF1aXJlKCcuL2ZydXN0dW0nKVxuICAsIHBlcnNwZWN0aXZlOiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlJylcbiAgLCBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldzogcmVxdWlyZSgnLi9wZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldycpXG4gICwgb3J0aG86IHJlcXVpcmUoJy4vb3J0aG8nKVxuICAsIGxvb2tBdDogcmVxdWlyZSgnLi9sb29rQXQnKVxuICAsIHN0cjogcmVxdWlyZSgnLi9zdHInKVxufSIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0O1xuXG4vKipcbiAqIEludmVydHMgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7IFxuICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvb2tBdDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW4sXG4gICAgICAgIGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl0sXG4gICAgICAgIGNlbnRlcnggPSBjZW50ZXJbMF0sXG4gICAgICAgIGNlbnRlcnkgPSBjZW50ZXJbMV0sXG4gICAgICAgIGNlbnRlcnogPSBjZW50ZXJbMl07XG5cbiAgICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5KG91dCk7XG4gICAgfVxuXG4gICAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICAgIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG5cbiAgICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB4MCA9IDA7XG4gICAgICAgIHgxID0gMDtcbiAgICAgICAgeDIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHgwICo9IGxlbjtcbiAgICAgICAgeDEgKj0gbGVuO1xuICAgICAgICB4MiAqPSBsZW47XG4gICAgfVxuXG4gICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cbiAgICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB5MCA9IDA7XG4gICAgICAgIHkxID0gMDtcbiAgICAgICAgeTIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHkwICo9IGxlbjtcbiAgICAgICAgeTEgKj0gbGVuO1xuICAgICAgICB5MiAqPSBsZW47XG4gICAgfVxuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geTA7XG4gICAgb3V0WzJdID0gejA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4MTtcbiAgICBvdXRbNV0gPSB5MTtcbiAgICBvdXRbNl0gPSB6MTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHgyO1xuICAgIG91dFs5XSA9IHkyO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICAgIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gICAgb3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdOyAgXG4gICAgb3V0WzBdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzNdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbNV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzZdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls4XTsgYjEgPSBiWzldOyBiMiA9IGJbMTBdOyBiMyA9IGJbMTFdO1xuICAgIG91dFs4XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzEwXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTFdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxM10gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTVdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gb3J0aG87XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KSxcbiAgICAgICAgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAtMiAqIGxyO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gLTIgKiBidDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAyICogbmY7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gICAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gICAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcGVyc3BlY3RpdmU7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGY7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxuICogd2l0aCB0aGUgc3RpbGwgZXhwZXJpZW1lbnRhbCBXZWJWUiBBUEkuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdiBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHZhbHVlczogdXBEZWdyZWVzLCBkb3duRGVncmVlcywgbGVmdERlZ3JlZXMsIHJpZ2h0RGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICAgIHZhciB1cFRhbiA9IE1hdGgudGFuKGZvdi51cERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgZG93blRhbiA9IE1hdGgudGFuKGZvdi5kb3duRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBsZWZ0VGFuID0gTWF0aC50YW4oZm92LmxlZnREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHJpZ2h0VGFuID0gTWF0aC50YW4oZm92LnJpZ2h0RGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICB4U2NhbGUgPSAyLjAgLyAobGVmdFRhbiArIHJpZ2h0VGFuKSxcbiAgICAgICAgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgICBvdXRbMF0gPSB4U2NhbGU7XG4gICAgb3V0WzFdID0gMC4wO1xuICAgIG91dFsyXSA9IDAuMDtcbiAgICBvdXRbM10gPSAwLjA7XG4gICAgb3V0WzRdID0gMC4wO1xuICAgIG91dFs1XSA9IHlTY2FsZTtcbiAgICBvdXRbNl0gPSAwLjA7XG4gICAgb3V0WzddID0gMC4wO1xuICAgIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICAgIG91dFs5XSA9ICgodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTFdID0gLTEuMDtcbiAgICBvdXRbMTJdID0gMC4wO1xuICAgIG91dFsxM10gPSAwLjA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTVdID0gMC4wO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcGFyYW0ge3ZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICB2YXIgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXSxcbiAgICAgICAgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiksXG4gICAgICAgIHMsIGMsIHQsXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjMsXG4gICAgICAgIGIwMCwgYjAxLCBiMDIsXG4gICAgICAgIGIxMCwgYjExLCBiMTIsXG4gICAgICAgIGIyMCwgYjIxLCBiMjI7XG5cbiAgICBpZiAoTWF0aC5hYnMobGVuKSA8IDAuMDAwMDAxKSB7IHJldHVybiBudWxsOyB9XG4gICAgXG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4ICo9IGxlbjtcbiAgICB5ICo9IGxlbjtcbiAgICB6ICo9IGxlbjtcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICAgIHQgPSAxIC0gYztcblxuICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcbiAgICBiMDAgPSB4ICogeCAqIHQgKyBjOyBiMDEgPSB5ICogeCAqIHQgKyB6ICogczsgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7IGIxMSA9IHkgKiB5ICogdCArIGM7IGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzOyBiMjEgPSB5ICogeiAqIHQgLSB4ICogczsgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICAgIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gICAgb3V0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xuICAgIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gICAgb3V0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICAgIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gICAgb3V0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xuICAgIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gICAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVg7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFswXSAgPSBhWzBdO1xuICAgICAgICBvdXRbMV0gID0gYVsxXTtcbiAgICAgICAgb3V0WzJdICA9IGFbMl07XG4gICAgICAgIG91dFszXSAgPSBhWzNdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbNF0gID0gYVs0XTtcbiAgICAgICAgb3V0WzVdICA9IGFbNV07XG4gICAgICAgIG91dFs2XSAgPSBhWzZdO1xuICAgICAgICBvdXRbN10gID0gYVs3XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjIC0gYTIwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjIC0gYTIzICogcztcbiAgICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgICBvdXRbMTBdID0gYTAyICogcyArIGEyMiAqIGM7XG4gICAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWjtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbOF0gID0gYVs4XTtcbiAgICAgICAgb3V0WzldICA9IGFbOV07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgKyBhMTIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICAgIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgLSBhMDEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgICBvdXRbMF0gPSBhWzBdICogeDtcbiAgICBvdXRbMV0gPSBhWzFdICogeDtcbiAgICBvdXRbMl0gPSBhWzJdICogeDtcbiAgICBvdXRbM10gPSBhWzNdICogeDtcbiAgICBvdXRbNF0gPSBhWzRdICogeTtcbiAgICBvdXRbNV0gPSBhWzVdICogeTtcbiAgICBvdXRbNl0gPSBhWzZdICogeTtcbiAgICBvdXRbN10gPSBhWzddICogeTtcbiAgICBvdXRbOF0gPSBhWzhdICogejtcbiAgICBvdXRbOV0gPSBhWzldICogejtcbiAgICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICAgIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc3RyO1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBtYXQgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzhdICsgJywgJyArIGFbOV0gKyAnLCAnICsgYVsxMF0gKyAnLCAnICsgYVsxMV0gKyAnLCAnICsgXG4gICAgICAgICAgICAgICAgICAgIGFbMTJdICsgJywgJyArIGFbMTNdICsgJywgJyArIGFbMTRdICsgJywgJyArIGFbMTVdICsgJyknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl0sXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjM7XG5cbiAgICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMF0gPSBhMDA7IG91dFsxXSA9IGEwMTsgb3V0WzJdID0gYTAyOyBvdXRbM10gPSBhMDM7XG4gICAgICAgIG91dFs0XSA9IGExMDsgb3V0WzVdID0gYTExOyBvdXRbNl0gPSBhMTI7IG91dFs3XSA9IGExMztcbiAgICAgICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICAgICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNwb3NlO1xuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIHZhciBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICAgICAgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhMDE7XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhMDI7XG4gICAgICAgIG91dFs5XSA9IGExMjtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYTAzO1xuICAgICAgICBvdXRbMTNdID0gYTEzO1xuICAgICAgICBvdXRbMTRdID0gYTIzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhWzFdO1xuICAgICAgICBvdXRbNV0gPSBhWzVdO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYVsyXTtcbiAgICAgICAgb3V0WzldID0gYVs2XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhWzNdO1xuICAgICAgICBvdXRbMTNdID0gYVs3XTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gYWRkO1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ2xlXG5cbnZhciBmcm9tVmFsdWVzID0gcmVxdWlyZSgnLi9mcm9tVmFsdWVzJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgZG90ID0gcmVxdWlyZSgnLi9kb3QnKVxuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gM0QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5mdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gICAgdmFyIHRlbXBBID0gZnJvbVZhbHVlcyhhWzBdLCBhWzFdLCBhWzJdKVxuICAgIHZhciB0ZW1wQiA9IGZyb21WYWx1ZXMoYlswXSwgYlsxXSwgYlsyXSlcbiBcbiAgICBub3JtYWxpemUodGVtcEEsIHRlbXBBKVxuICAgIG5vcm1hbGl6ZSh0ZW1wQiwgdGVtcEIpXG4gXG4gICAgdmFyIGNvc2luZSA9IGRvdCh0ZW1wQSwgdGVtcEIpXG5cbiAgICBpZihjb3NpbmUgPiAxLjApe1xuICAgICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKVxuICAgIH0gICAgIFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgb3V0WzJdID0gYVsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIG91dFsyXSA9IGFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjM1xuICpcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG4gICAgb3V0WzBdID0gMFxuICAgIG91dFsxXSA9IDBcbiAgICBvdXRbMl0gPSAwXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3Jvc3M7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sXG4gICAgICAgIGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl1cblxuICAgIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5XG4gICAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYnpcbiAgICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeilcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpdmlkZTtcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSAvIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkb3Q7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG5cbnZhciB2ZWMgPSByZXF1aXJlKCcuL2NyZWF0ZScpKClcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjM3MuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMy4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgICAgICB2YXIgaSwgbFxuICAgICAgICBpZighc3RyaWRlKSB7XG4gICAgICAgICAgICBzdHJpZGUgPSAzXG4gICAgICAgIH1cblxuICAgICAgICBpZighb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAwXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGNvdW50KSB7XG4gICAgICAgICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsID0gYS5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgICAgIHZlY1swXSA9IGFbaV0gXG4gICAgICAgICAgICB2ZWNbMV0gPSBhW2krMV0gXG4gICAgICAgICAgICB2ZWNbMl0gPSBhW2krMl1cbiAgICAgICAgICAgIGZuKHZlYywgdmVjLCBhcmcpXG4gICAgICAgICAgICBhW2ldID0gdmVjWzBdIFxuICAgICAgICAgICAgYVtpKzFdID0gdmVjWzFdIFxuICAgICAgICAgICAgYVtpKzJdID0gdmVjWzJdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICBvdXRbMl0gPSB6XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgYW5nbGU6IHJlcXVpcmUoJy4vYW5nbGUnKVxuICAsIGZyb21WYWx1ZXM6IHJlcXVpcmUoJy4vZnJvbVZhbHVlcycpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBzZXQ6IHJlcXVpcmUoJy4vc2V0JylcbiAgLCBhZGQ6IHJlcXVpcmUoJy4vYWRkJylcbiAgLCBzdWJ0cmFjdDogcmVxdWlyZSgnLi9zdWJ0cmFjdCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIGRpdmlkZTogcmVxdWlyZSgnLi9kaXZpZGUnKVxuICAsIG1pbjogcmVxdWlyZSgnLi9taW4nKVxuICAsIG1heDogcmVxdWlyZSgnLi9tYXgnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCBzY2FsZUFuZEFkZDogcmVxdWlyZSgnLi9zY2FsZUFuZEFkZCcpXG4gICwgZGlzdGFuY2U6IHJlcXVpcmUoJy4vZGlzdGFuY2UnKVxuICAsIHNxdWFyZWREaXN0YW5jZTogcmVxdWlyZSgnLi9zcXVhcmVkRGlzdGFuY2UnKVxuICAsIGxlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGgnKVxuICAsIHNxdWFyZWRMZW5ndGg6IHJlcXVpcmUoJy4vc3F1YXJlZExlbmd0aCcpXG4gICwgbmVnYXRlOiByZXF1aXJlKCcuL25lZ2F0ZScpXG4gICwgaW52ZXJzZTogcmVxdWlyZSgnLi9pbnZlcnNlJylcbiAgLCBub3JtYWxpemU6IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbiAgLCBkb3Q6IHJlcXVpcmUoJy4vZG90JylcbiAgLCBjcm9zczogcmVxdWlyZSgnLi9jcm9zcycpXG4gICwgbGVycDogcmVxdWlyZSgnLi9sZXJwJylcbiAgLCByYW5kb206IHJlcXVpcmUoJy4vcmFuZG9tJylcbiAgLCB0cmFuc2Zvcm1NYXQ0OiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDQnKVxuICAsIHRyYW5zZm9ybU1hdDM6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MycpXG4gICwgdHJhbnNmb3JtUXVhdDogcmVxdWlyZSgnLi90cmFuc2Zvcm1RdWF0JylcbiAgLCByb3RhdGVYOiByZXF1aXJlKCcuL3JvdGF0ZVgnKVxuICAsIHJvdGF0ZVk6IHJlcXVpcmUoJy4vcm90YXRlWScpXG4gICwgcm90YXRlWjogcmVxdWlyZSgnLi9yb3RhdGVaJylcbiAgLCBmb3JFYWNoOiByZXF1aXJlKCcuL2ZvckVhY2gnKVxufSIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJzZTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdXG4gIG91dFsxXSA9IDEuMCAvIGFbMV1cbiAgb3V0WzJdID0gMS4wIC8gYVsyXVxuICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBsZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KVxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVycDtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICB2YXIgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXVxuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSlcbiAgICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG1heDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pXG4gICAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtaW47XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKVxuICAgIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKiBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSAqIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBuZWdhdGU7XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdXG4gICAgb3V0WzFdID0gLWFbMV1cbiAgICBvdXRbMl0gPSAtYVsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHZhciBsZW4gPSB4KnggKyB5KnkgKyB6KnpcbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgICAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbilcbiAgICAgICAgb3V0WzBdID0gYVswXSAqIGxlblxuICAgICAgICBvdXRbMV0gPSBhWzFdICogbGVuXG4gICAgICAgIG91dFsyXSA9IGFbMl0gKiBsZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcmFuZG9tO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gICAgc2NhbGUgPSBzY2FsZSB8fCAxLjBcblxuICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDIuMCAqIE1hdGguUElcbiAgICB2YXIgeiA9IChNYXRoLnJhbmRvbSgpICogMi4wKSAtIDEuMFxuICAgIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wLXoqeikgKiBzY2FsZVxuXG4gICAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGVcbiAgICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHpTY2FsZVxuICAgIG91dFsyXSA9IHogKiBzY2FsZVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVg7XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCBiLCBjKXtcbiAgICB2YXIgcCA9IFtdLCByPVtdXG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXVxuICAgIHBbMV0gPSBhWzFdIC0gYlsxXVxuICAgIHBbMl0gPSBhWzJdIC0gYlsyXVxuXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMF1cbiAgICByWzFdID0gcFsxXSpNYXRoLmNvcyhjKSAtIHBbMl0qTWF0aC5zaW4oYylcbiAgICByWzJdID0gcFsxXSpNYXRoLnNpbihjKSArIHBbMl0qTWF0aC5jb3MoYylcblxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXVxuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gclsyXSArIGJbMl1cblxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVk7XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeS1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCBiLCBjKXtcbiAgICB2YXIgcCA9IFtdLCByPVtdXG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXVxuICAgIHBbMV0gPSBhWzFdIC0gYlsxXVxuICAgIHBbMl0gPSBhWzJdIC0gYlsyXVxuICBcbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFsyXSpNYXRoLnNpbihjKSArIHBbMF0qTWF0aC5jb3MoYylcbiAgICByWzFdID0gcFsxXVxuICAgIHJbMl0gPSBwWzJdKk1hdGguY29zKGMpIC0gcFswXSpNYXRoLnNpbihjKVxuICBcbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF1cbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdXG4gIFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVo7XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgei1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCBiLCBjKXtcbiAgICB2YXIgcCA9IFtdLCByPVtdXG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXVxuICAgIHBbMV0gPSBhWzFdIC0gYlsxXVxuICAgIHBbMl0gPSBhWzJdIC0gYlsyXVxuICBcbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFswXSpNYXRoLmNvcyhjKSAtIHBbMV0qTWF0aC5zaW4oYylcbiAgICByWzFdID0gcFswXSpNYXRoLnNpbihjKSArIHBbMV0qTWF0aC5jb3MoYylcbiAgICByWzJdID0gcFsyXVxuICBcbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF1cbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdXG4gIFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlO1xuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlxuICAgIG91dFsxXSA9IGFbMV0gKiBiXG4gICAgb3V0WzJdID0gYVsyXSAqIGJcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZUFuZEFkZDtcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICAgIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKVxuICAgIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKVxuICAgIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNldDtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICBvdXRbMl0gPSB6XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXVxuICAgIHJldHVybiB4KnggKyB5KnkgKyB6Knpcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICByZXR1cm4geCp4ICsgeSp5ICsgeip6XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSB0aGUgM3gzIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdXG4gICAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdXG4gICAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddXG4gICAgb3V0WzJdID0geCAqIG1bMl0gKyB5ICogbVs1XSArIHogKiBtWzhdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NDtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQ0LlxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sXG4gICAgICAgIHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV1cbiAgICB3ID0gdyB8fCAxLjBcbiAgICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gd1xuICAgIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3XG4gICAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSkgLyB3XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtUXVhdDtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgICAvLyBiZW5jaG1hcmtzOiBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9uc1xuXG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sXG4gICAgICAgIHF4ID0gcVswXSwgcXkgPSBxWzFdLCBxeiA9IHFbMl0sIHF3ID0gcVszXSxcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY1xuICAgICAgICBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeSxcbiAgICAgICAgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHosXG4gICAgICAgIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4LFxuICAgICAgICBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHpcblxuICAgIC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcbiAgICBvdXRbMF0gPSBpeCAqIHF3ICsgaXcgKiAtcXggKyBpeSAqIC1xeiAtIGl6ICogLXF5XG4gICAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xelxuICAgIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXhcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhZGRcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZCAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdXG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdXG4gIG91dFszXSA9IGFbM10gKyBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNsb25lIChhKSB7XG4gIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpXG4gIG91dFswXSA9IGFbMF1cbiAgb3V0WzFdID0gYVsxXVxuICBvdXRbMl0gPSBhWzJdXG4gIG91dFszXSA9IGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weSAob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF1cbiAgb3V0WzFdID0gYVsxXVxuICBvdXRbMl0gPSBhWzJdXG4gIG91dFszXSA9IGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWM0XG4gKlxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5mdW5jdGlvbiBjcmVhdGUgKCkge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSAwXG4gIG91dFsxXSA9IDBcbiAgb3V0WzJdID0gMFxuICBvdXRbM10gPSAwXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZGlzdGFuY2VcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2UgKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgeiA9IGJbMl0gLSBhWzJdLFxuICAgIHcgPSBiWzNdIC0gYVszXVxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGVcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGRpdmlkZSAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdXG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdXG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdXG4gIG91dFszXSA9IGFbM10gLyBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZG90XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QgKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21WYWx1ZXNcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gZnJvbVZhbHVlcyAoeCwgeSwgeiwgdykge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSB4XG4gIG91dFsxXSA9IHlcbiAgb3V0WzJdID0gelxuICBvdXRbM10gPSB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJyksXG4gIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJyksXG4gIGZyb21WYWx1ZXM6IHJlcXVpcmUoJy4vZnJvbVZhbHVlcycpLFxuICBjb3B5OiByZXF1aXJlKCcuL2NvcHknKSxcbiAgc2V0OiByZXF1aXJlKCcuL3NldCcpLFxuICBhZGQ6IHJlcXVpcmUoJy4vYWRkJyksXG4gIHN1YnRyYWN0OiByZXF1aXJlKCcuL3N1YnRyYWN0JyksXG4gIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JyksXG4gIGRpdmlkZTogcmVxdWlyZSgnLi9kaXZpZGUnKSxcbiAgbWluOiByZXF1aXJlKCcuL21pbicpLFxuICBtYXg6IHJlcXVpcmUoJy4vbWF4JyksXG4gIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJyksXG4gIHNjYWxlQW5kQWRkOiByZXF1aXJlKCcuL3NjYWxlQW5kQWRkJyksXG4gIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJyksXG4gIHNxdWFyZWREaXN0YW5jZTogcmVxdWlyZSgnLi9zcXVhcmVkRGlzdGFuY2UnKSxcbiAgbGVuZ3RoOiByZXF1aXJlKCcuL2xlbmd0aCcpLFxuICBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKSxcbiAgbmVnYXRlOiByZXF1aXJlKCcuL25lZ2F0ZScpLFxuICBpbnZlcnNlOiByZXF1aXJlKCcuL2ludmVyc2UnKSxcbiAgbm9ybWFsaXplOiByZXF1aXJlKCcuL25vcm1hbGl6ZScpLFxuICBkb3Q6IHJlcXVpcmUoJy4vZG90JyksXG4gIGxlcnA6IHJlcXVpcmUoJy4vbGVycCcpLFxuICByYW5kb206IHJlcXVpcmUoJy4vcmFuZG9tJyksXG4gIHRyYW5zZm9ybU1hdDQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0NCcpLFxuICB0cmFuc2Zvcm1RdWF0OiByZXF1aXJlKCcuL3RyYW5zZm9ybVF1YXQnKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnNlXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZSAob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF1cbiAgb3V0WzFdID0gMS4wIC8gYVsxXVxuICBvdXRbMl0gPSAxLjAgLyBhWzJdXG4gIG91dFszXSA9IDEuMCAvIGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsZW5ndGhcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBsZW5ndGggKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdXG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxlcnBcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbGVycCAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdLFxuICAgIGF6ID0gYVsyXSxcbiAgICBhdyA9IGFbM11cbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheClcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSlcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheilcbiAgb3V0WzNdID0gYXcgKyB0ICogKGJbM10gLSBhdylcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtYXhcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1heCAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pXG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pXG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pXG4gIG91dFszXSA9IE1hdGgubWF4KGFbM10sIGJbM10pXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWluXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBtaW4gKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKVxuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKVxuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKVxuICBvdXRbM10gPSBNYXRoLm1pbihhWzNdLCBiWzNdKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseSAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdXG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdXG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdXG4gIG91dFszXSA9IGFbM10gKiBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlXG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlIChvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF1cbiAgb3V0WzFdID0gLWFbMV1cbiAgb3V0WzJdID0gLWFbMl1cbiAgb3V0WzNdID0gLWFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAob3V0LCBhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXSxcbiAgICB3ID0gYVszXVxuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHdcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbilcbiAgICBvdXRbMF0gPSB4ICogbGVuXG4gICAgb3V0WzFdID0geSAqIGxlblxuICAgIG91dFsyXSA9IHogKiBsZW5cbiAgICBvdXRbM10gPSB3ICogbGVuXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuIiwidmFyIHZlY05vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbnZhciB2ZWNTY2FsZSA9IHJlcXVpcmUoJy4vc2NhbGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbSAob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMFxuXG4gIC8vIFRPRE86IFRoaXMgaXMgYSBwcmV0dHkgYXdmdWwgd2F5IG9mIGRvaW5nIHRoaXMuIEZpbmQgc29tZXRoaW5nIGJldHRlci5cbiAgb3V0WzBdID0gTWF0aC5yYW5kb20oKVxuICBvdXRbMV0gPSBNYXRoLnJhbmRvbSgpXG4gIG91dFsyXSA9IE1hdGgucmFuZG9tKClcbiAgb3V0WzNdID0gTWF0aC5yYW5kb20oKVxuICB2ZWNOb3JtYWxpemUob3V0LCBvdXQpXG4gIHZlY1NjYWxlKG91dCwgb3V0LCBzY2FsZSlcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZSAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiXG4gIG91dFsxXSA9IGFbMV0gKiBiXG4gIG91dFsyXSA9IGFbMl0gKiBiXG4gIG91dFszXSA9IGFbM10gKiBiXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVBbmRBZGRcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbmRBZGQgKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKVxuICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSlcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2V0XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNldCAob3V0LCB4LCB5LCB6LCB3KSB7XG4gIG91dFswXSA9IHhcbiAgb3V0WzFdID0geVxuICBvdXRbMl0gPSB6XG4gIG91dFszXSA9IHdcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkRGlzdGFuY2VcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZSAoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICB6ID0gYlsyXSAtIGFbMl0sXG4gICAgdyA9IGJbM10gLSBhWzNdXG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogd1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZExlbmd0aCAoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM11cbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YnRyYWN0XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0IChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF1cbiAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgb3V0WzJdID0gYVsyXSAtIGJbMl1cbiAgb3V0WzNdID0gYVszXSAtIGJbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQ0XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgbWF0NC5cbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQgKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSwgdyA9IGFbM11cbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0gKiB3XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogd1xuICBvdXRbMl0gPSBtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0gKiB3XG4gIG91dFszXSA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XSAqIHdcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1RdWF0XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQgKG91dCwgYSwgcSkge1xuICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSxcbiAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY1xuICAgIGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5LFxuICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4LFxuICAgIGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogelxuXG4gIC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcbiAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeVxuICBvdXRbMV0gPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6XG4gIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXhcbiAgb3V0WzNdID0gYVszXVxuICByZXR1cm4gb3V0XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIGZpbGVTeXN0ZW1VdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9maWxlU3lzdGVtJyksXG4gIGFzeW5jaHJvbm91c1V0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FzeW5jaHJvbm91cycpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5mdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5mdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5mdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gYXJyYXkyLmxlbmd0aCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc2Vjb25kOiBzZWNvbmQsXG4gIHRoaXJkOiB0aGlyZCxcbiAgZm91cnRoOiBmb3VydGgsXG4gIGZpZnRoOiBmaWZ0aCxcbiAgZmlmdGhMYXN0OiBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3Q6IGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdDogdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0OiBzZWNvbmRMYXN0LFxuICBsYXN0OiBsYXN0LFxuICB0YWlsOiB0YWlsLFxuICBwdXNoOiBwdXNoLFxuICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICBjbGVhcjogY2xlYXIsXG4gIGNvcHk6IGNvcHksXG4gIG1lcmdlOiBtZXJnZSxcbiAgc3BsaWNlOiBzcGxpY2UsXG4gIHJlcGxhY2U6IHJlcGxhY2UsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBmaW5kOiBmaW5kLFxuICBwcnVuZTogcHJ1bmUsXG4gIHBhdGNoOiBwYXRjaCxcbiAgYXVnbWVudDogYXVnbWVudCxcbiAgc2VwYXJhdGU6IHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWU6IGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZTogYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrLCBpbmRleCkge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdoaWxzdDogd2hpbHN0LFxyXG4gIGZvckVhY2g6IGZvckVhY2gsXHJcbiAgc2VxdWVuY2U6IHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHk6IGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseTogcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5mdW5jdGlvbiBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpIHtcbiAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoYWJzb2x1dGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gZmlsZUV4aXN0cyhhYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKSxcbiAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICByZXR1cm4gZW50cnlGaWxlO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RvcnlFeGlzdHMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZURpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcnlFbXB0eShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHJldHVybiBzdWJFbnRyeU5hbWVzO1xufVxuXG5mdW5jdGlvbiByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW50cnlFeGlzdHM6IGVudHJ5RXhpc3RzLFxuICBmaWxlRXhpc3RzOiBmaWxlRXhpc3RzLFxuICBpc0VudHJ5RmlsZTogaXNFbnRyeUZpbGUsXG4gIGRpcmVjdG9yeUV4aXN0czogZGlyZWN0b3J5RXhpc3RzLFxuICBpc0VudHJ5RGlyZWN0b3J5OiBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5OiBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5OiByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZTogcmVhZEZpbGUsXG4gIHdyaXRlRmlsZTogd3JpdGVGaWxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheSA9IHJlcXVpcmUoJy4vYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gPSBhcnJheTtcblxuZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlxcLnsxLDJ9XFwvLyksXG4gICAgICAgIHBhdGhSZWxhdGl2ZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9IGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9ICFwYXRoUmVsYXRpdmVQYXRoOyAvLy9cblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGgodG9wbW9zdERpcmVjdG9yeU5hbWUsIHBhdGgpIHtcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZS5yZXBsYWNlKC9cXC8kLywgJycpOyAvLy9cblxuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0RGlyZWN0b3J5TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHBvc2l0aW9uID0gcGF0aC5zZWFyY2gocmVnRXhwKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29tYmluZVBhdGhzKGRpcmVjdG9yeVBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgYWJzb2x1dGVQYXRoID0gbnVsbDtcblxuICBjb25zdCBkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyA9IGRpcmVjdG9yeVBhdGguc3BsaXQoJy8nKSxcbiAgICAgICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoJy8nKTtcblxuICBsZXQgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpLFxuICAgICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWU7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9PT0gJy4nKSB7XG4gICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9PT0gJy4uJykgJiYgKGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuc2hpZnQoKTtcbiAgICBkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IFtdLmNvbmNhdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcykuY29uY2F0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcblxuICAgIGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLmpvaW4oJy8nKTtcbiAgfVxuXG4gIHJldHVybiBhYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aDEsIHBhdGgyKSB7XG4gIHBhdGgxID0gcGF0aDEucmVwbGFjZSgvXFwvJC8sICcnKTsgIC8vL1xuXG4gIGNvbnN0IGNvbWJpbmVkUGF0aCA9IGAke3BhdGgxfS8ke3BhdGgyfWA7XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uK1xcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gZGlyZWN0b3J5UGF0aDtcbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goLyheLispXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNQYXRoUmVsYXRpdmVQYXRoOiBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aDogaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTogaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUsXG4gIGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGg6IGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGgsXG4gIGNvbWJpbmVQYXRoczogY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzOiBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoOiBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoOiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoOiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iXX0=
