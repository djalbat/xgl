"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _part = _interopRequireDefault(require("../element/part"));

var _camera = _interopRequireDefault(require("../element/camera"));

var _element = _interopRequireDefault(require("../element"));

var _userInput = _interopRequireDefault(require("../miscellaneous/userInput"));

var _vector = require("../maths/vector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var forEach = _necessary.asynchronousUtilities.forEach;

var Scene = /*#__PURE__*/function (_Element) {
  _inherits(Scene, _Element);

  var _super = _createSuper(Scene);

  function Scene(parts, camera, canvas) {
    var _this;

    _classCallCheck(this, Scene);

    _this = _super.call(this);
    _this.parts = parts;
    _this.camera = camera;
    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: "windowResizeHandler",
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
      var relativeMouseCoordinates = (0, _vector.zero2)(),
          ///
      mouseWheelDelta = 0,
          ///
      shiftKeyDown = false; ///

      this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
    }
  }, {
    key: "userInputHandler",
    value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          render = this.render.bind(this),
          callback = render; ///

      this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
    }
  }, {
    key: "render",
    value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this2 = this;

      this.canvas.clear();
      this.parts.forEach(function (part) {
        return part.render(_this2.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      });
    }
  }, {
    key: "initialise",
    value: function initialise(canvas, update, done) {
      var _this3 = this;

      var userInput = _userInput["default"].fromNothing(),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

      userInput.initialise(canvas);
      initialiseParts(this.parts, update, canvas, function () {
        window.onresize = windowResizeHandler;
        userInput.addUserInputHandler(userInputHandler);

        _this3.windowResizeHandler(); ///


        done && done(); ///
      });
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var canvas = properties.canvas,
          done = properties.done,
          update = properties.update,
          childElements = properties.childElements,
          parts = partsFromChildElements(childElements),
          camera = cameraFromChildElements(childElements),
          scene = _element["default"].fromProperties(Scene, properties, parts, camera, canvas);

      scene.initialise(canvas, update, done);
      return scene;
    }
  }]);

  return Scene;
}(_element["default"]);

exports["default"] = Scene;

function defer(callback) {
  setTimeout(callback, 0);
}

function initialiseParts(parts, update, canvas, done) {
  forEach(parts, function (part, next, done, context, index) {
    var partsLength = parts.length,
        progress = (index + 1) / partsLength;
    part.initialise(canvas);
    defer(function () {
      update && update(progress); ///

      next();
    });
  }, done);
}

function partsFromChildElements(childElements) {
  var parts = childElements.reduce(function (parts, childElement) {
    if (childElement instanceof _part["default"]) {
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
      if (childElement instanceof _camera["default"]) {
        camera = childElement; ///
      }
    }

    return camera;
  }, null);
  return camera;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJTY2VuZSIsInBhcnRzIiwiY2FtZXJhIiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyIiwiYmluZCIsImNhbGxiYWNrIiwicmVzaXplIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwidXBkYXRlIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNsZWFyIiwicGFydCIsImRvbmUiLCJ1c2VySW5wdXQiLCJVc2VySW5wdXQiLCJmcm9tTm90aGluZyIsInVzZXJJbnB1dEhhbmRsZXIiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiaW5pdGlhbGlzZSIsImluaXRpYWxpc2VQYXJ0cyIsIndpbmRvdyIsIm9ucmVzaXplIiwiYWRkVXNlcklucHV0SGFuZGxlciIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwicGFydHNGcm9tQ2hpbGRFbGVtZW50cyIsImNhbWVyYUZyb21DaGlsZEVsZW1lbnRzIiwic2NlbmUiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJkZWZlciIsInNldFRpbWVvdXQiLCJuZXh0IiwiY29udGV4dCIsImluZGV4IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwcm9ncmVzcyIsInJlZHVjZSIsImNoaWxkRWxlbWVudCIsIlBhcnQiLCJwdXNoIiwiQ2FtZXJhIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFRWixJQVJZLENBQWY7QUFVQSxTQUFPQSxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcblxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0LCAgLy8vXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgd2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGluaXRpYWxpc2VQYXJ0cyh0aGlzLnBhcnRzLCB1cGRhdGUsIGNhbnZhcywgKCkgPT4ge1xuICAgICAgd2luZG93Lm9ucmVzaXplID0gd2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgICAgdXNlcklucHV0LmFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcik7XG5cbiAgICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cblxuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgZG9uZSwgdXBkYXRlLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBjYW1lcmEgPSBjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZlcihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZVBhcnRzKHBhcnRzLCB1cGRhdGUsIGNhbnZhcywgZG9uZSkge1xuICBmb3JFYWNoKHBhcnRzLCAocGFydCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aCxcbiAgICAgICAgICBwcm9ncmVzcyA9ICggaW5kZXggKyAxICkgLyBwYXJ0c0xlbmd0aDtcblxuICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgZGVmZXIoKCkgPT4ge1xuICAgICAgdXBkYXRlICYmIHVwZGF0ZShwcm9ncmVzcyk7IC8vL1xuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgcGFydHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgocGFydHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBQYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjb25zdCBjYW1lcmEgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoY2FtZXJhLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2FtZXJhID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2FtZXJhKSB7XG4gICAgICAgIGNhbWVyYSA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBjYW1lcmE7XG59XG4iXX0=