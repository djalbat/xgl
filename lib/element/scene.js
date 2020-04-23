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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJTY2VuZSIsInBhcnRzIiwiY2FtZXJhIiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyIiwiYmluZCIsImNhbGxiYWNrIiwicmVzaXplIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwidXBkYXRlIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNsZWFyIiwicGFydCIsImRvbmUiLCJ1c2VySW5wdXQiLCJVc2VySW5wdXQiLCJmcm9tTm90aGluZyIsInVzZXJJbnB1dEhhbmRsZXIiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiaW5pdGlhbGlzZSIsImluaXRpYWxpc2VQYXJ0cyIsIndpbmRvdyIsIm9ucmVzaXplIiwiYWRkVXNlcklucHV0SGFuZGxlciIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwicGFydHNGcm9tQ2hpbGRFbGVtZW50cyIsImNhbWVyYUZyb21DaGlsZEVsZW1lbnRzIiwic2NlbmUiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJkZWZlciIsInNldFRpbWVvdXQiLCJuZXh0IiwiY29udGV4dCIsImluZGV4IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwcm9ncmVzcyIsInJlZHVjZSIsImNoaWxkRWxlbWVudCIsIlBhcnQiLCJwdXNoIiwiQ2FtZXJhIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodCwgIC8vL1xuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBpbml0aWFsaXNlUGFydHModGhpcy5wYXJ0cywgdXBkYXRlLCBjYW52YXMsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VQYXJ0cyhwYXJ0cywgdXBkYXRlLCBjYW52YXMsIGRvbmUpIHtcbiAgZm9yRWFjaChwYXJ0cywgKHBhcnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gcGFydHNMZW5ndGg7XG5cbiAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIl19