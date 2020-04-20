"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var necessary = require("necessary");

var Part = require("../element/part"),
    Camera = require("../element/camera"),
    Element = require("../element"),
    UserInput = require("../miscellaneous/userInput"),
    vectorMaths = require("../maths/vector");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJQYXJ0IiwiQ2FtZXJhIiwiRWxlbWVudCIsIlVzZXJJbnB1dCIsInZlY3Rvck1hdGhzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZm9yRWFjaCIsInplcm8yIiwiU2NlbmUiLCJwYXJ0cyIsImNhbWVyYSIsImNhbnZhcyIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsImJpbmQiLCJjYWxsYmFjayIsInJlc2l6ZSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsInVwZGF0ZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsInBhcnQiLCJkb25lIiwidXNlcklucHV0IiwiZnJvbU5vdGhpbmciLCJ1c2VySW5wdXRIYW5kbGVyIiwid2luZG93UmVzaXplSGFuZGxlciIsImluaXRpYWxpc2UiLCJpbml0aWFsaXNlUGFydHMiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImFkZFVzZXJJbnB1dEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInBhcnRzRnJvbUNoaWxkRWxlbWVudHMiLCJjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyIsInNjZW5lIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmZXIiLCJzZXRUaW1lb3V0IiwibmV4dCIsImNvbnRleHQiLCJpbmRleCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicHJvZ3Jlc3MiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoi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QixZQUFiLENBRGdDLENBQ0o7O0FBRTVCckQsTUFBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXN0IsSUFBWDtBQUNEOztBQUNELFdBQU96QixLQUFQO0FBQ0QsR0FQYSxFQU9YLEVBUFcsQ0FBZDtBQVNBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTdUMsdUJBQVQsQ0FBaUNGLGFBQWpDLEVBQWdEO0FBQzlDLE1BQU1wQyxNQUFNLEdBQUdvQyxhQUFhLENBQUNlLE1BQWQsQ0FBcUIsVUFBQ25ELE1BQUQsRUFBU29ELFlBQVQsRUFBMEI7QUFDNUQsUUFBSXBELE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CLFVBQUlvRCxZQUFZLFlBQVk3RCxNQUE1QixFQUFvQztBQUNsQ1MsUUFBQUEsTUFBTSxHQUFHb0QsWUFBVCxDQURrQyxDQUNWO0FBQ3pCO0FBQ0Y7O0FBRUQsV0FBT3BELE1BQVA7QUFDRCxHQVJjLEVBUVosSUFSWSxDQUFmO0FBVUEsU0FBT0EsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoXCJuZWNlc3NhcnlcIik7XG5cbmNvbnN0IFBhcnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9wYXJ0XCIpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvY2FtZXJhXCIpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpLFxuICAgICAgVXNlcklucHV0ID0gcmVxdWlyZShcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCIpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHplcm8yIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcblxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0LCAgLy8vXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgd2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGluaXRpYWxpc2VQYXJ0cyh0aGlzLnBhcnRzLCB1cGRhdGUsIGNhbnZhcywgKCkgPT4ge1xuICAgICAgd2luZG93Lm9ucmVzaXplID0gd2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgICAgdXNlcklucHV0LmFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcik7XG5cbiAgICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cblxuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgZG9uZSwgdXBkYXRlLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBjYW1lcmEgPSBjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuXG5mdW5jdGlvbiBkZWZlcihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZVBhcnRzKHBhcnRzLCB1cGRhdGUsIGNhbnZhcywgZG9uZSkge1xuICBmb3JFYWNoKHBhcnRzLCAocGFydCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aCxcbiAgICAgICAgICBwcm9ncmVzcyA9ICggaW5kZXggKyAxICkgLyBwYXJ0c0xlbmd0aDtcblxuICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgZGVmZXIoKCkgPT4ge1xuICAgICAgdXBkYXRlICYmIHVwZGF0ZShwcm9ncmVzcyk7IC8vL1xuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgcGFydHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgocGFydHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBQYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjb25zdCBjYW1lcmEgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoY2FtZXJhLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2FtZXJhID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2FtZXJhKSB7XG4gICAgICAgIGNhbWVyYSA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBjYW1lcmE7XG59XG4iXX0=