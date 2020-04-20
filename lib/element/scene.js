"use strict";

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var forEach = _necessary.asynchronousUtilities.forEach;

var Scene = /*#__PURE__*/function (_Element) {
  _inherits(Scene, _Element);

  function Scene(parts, camera, canvas) {
    var _this;

    _classCallCheck(this, Scene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this));
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

module.exports = Scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJTY2VuZSIsInBhcnRzIiwiY2FtZXJhIiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyIiwiYmluZCIsImNhbGxiYWNrIiwicmVzaXplIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwidXBkYXRlIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNsZWFyIiwicGFydCIsImRvbmUiLCJ1c2VySW5wdXQiLCJVc2VySW5wdXQiLCJmcm9tTm90aGluZyIsInVzZXJJbnB1dEhhbmRsZXIiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiaW5pdGlhbGlzZSIsImluaXRpYWxpc2VQYXJ0cyIsIndpbmRvdyIsIm9ucmVzaXplIiwiYWRkVXNlcklucHV0SGFuZGxlciIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwicGFydHNGcm9tQ2hpbGRFbGVtZW50cyIsImNhbWVyYUZyb21DaGlsZEVsZW1lbnRzIiwic2NlbmUiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmZXIiLCJzZXRUaW1lb3V0IiwibmV4dCIsImNvbnRleHQiLCJpbmRleCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicHJvZ3Jlc3MiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJQYXJ0IiwicHVzaCIsIkNhbWVyYSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7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T3RELE1BQVA7QUFDRCxHQVJjLEVBUVosSUFSWSxDQUFmO0FBVUEsU0FBT0EsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodCwgIC8vL1xuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBpbml0aWFsaXNlUGFydHModGhpcy5wYXJ0cywgdXBkYXRlLCBjYW52YXMsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VQYXJ0cyhwYXJ0cywgdXBkYXRlLCBjYW52YXMsIGRvbmUpIHtcbiAgZm9yRWFjaChwYXJ0cywgKHBhcnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gcGFydHNMZW5ndGg7XG5cbiAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIl19