'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var necessary = require('necessary');

var Part = require('../element/part'),
    Camera = require('../element/camera'),
    Element = require('../element'),
    UserInput = require('../miscellaneous/userInput'),
    vectorMaths = require('../maths/vector');

var asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach,
    zero2 = vectorMaths.zero2;

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
      var relativeMouseCoordinates = zero2(),
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

      var userInput = UserInput.fromNothing(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJQYXJ0IiwiQ2FtZXJhIiwiRWxlbWVudCIsIlVzZXJJbnB1dCIsInZlY3Rvck1hdGhzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZm9yRWFjaCIsInplcm8yIiwiU2NlbmUiLCJwYXJ0cyIsImNhbWVyYSIsImNhbnZhcyIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsImJpbmQiLCJjYWxsYmFjayIsInJlc2l6ZSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsInVwZGF0ZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsInBhcnQiLCJkb25lIiwidXNlcklucHV0IiwiZnJvbU5vdGhpbmciLCJ1c2VySW5wdXRIYW5kbGVyIiwid2luZG93UmVzaXplSGFuZGxlciIsImluaXRpYWxpc2UiLCJpbml0aWFsaXNlUGFydHMiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImFkZFVzZXJJbnB1dEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInBhcnRzRnJvbUNoaWxkRWxlbWVudHMiLCJjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyIsInNjZW5lIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmZXIiLCJzZXRUaW1lb3V0IiwibmV4dCIsImNvbnRleHQiLCJpbmRleCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicHJvZ3Jlc3MiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoi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QixZQUFiLENBRGdDLENBQ0o7O0FBRTVCckQsTUFBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXN0IsSUFBWDtBQUNEOztBQUNELFdBQU96QixLQUFQO0FBQ0QsR0FQYSxFQU9YLEVBUFcsQ0FBZDtBQVNBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTdUMsdUJBQVQsQ0FBaUNGLGFBQWpDLEVBQWdEO0FBQzlDLE1BQU1wQyxNQUFNLEdBQUdvQyxhQUFhLENBQUNlLE1BQWQsQ0FBcUIsVUFBQ25ELE1BQUQsRUFBU29ELFlBQVQsRUFBMEI7QUFDNUQsUUFBSXBELE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CLFVBQUlvRCxZQUFZLFlBQVk3RCxNQUE1QixFQUFvQztBQUNsQ1MsUUFBQUEsTUFBTSxHQUFHb0QsWUFBVCxDQURrQyxDQUNWO0FBQ3pCO0FBQ0Y7O0FBRUQsV0FBT3BELE1BQVA7QUFDRCxHQVJjLEVBUVosSUFSWSxDQUFmO0FBVUEsU0FBT0EsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUGFydCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvcGFydCcpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBVc2VySW5wdXQgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dCcpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodCwgIC8vL1xuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBpbml0aWFsaXNlUGFydHModGhpcy5wYXJ0cywgdXBkYXRlLCBjYW52YXMsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VQYXJ0cyhwYXJ0cywgdXBkYXRlLCBjYW52YXMsIGRvbmUpIHtcbiAgZm9yRWFjaChwYXJ0cywgKHBhcnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gcGFydHNMZW5ndGg7XG5cbiAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIl19