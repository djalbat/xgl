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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJQYXJ0IiwiQ2FtZXJhIiwiRWxlbWVudCIsIlVzZXJJbnB1dCIsInZlY3Rvck1hdGhzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZm9yRWFjaCIsInplcm8yIiwiU2NlbmUiLCJwYXJ0cyIsImNhbWVyYSIsImNhbnZhcyIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZW5kZXIiLCJiaW5kIiwiY2FsbGJhY2siLCJ1cGRhdGUiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsInBhcnQiLCJkb25lIiwidXNlcklucHV0IiwiZnJvbU5vdGhpbmciLCJ1c2VySW5wdXRIYW5kbGVyIiwid2luZG93UmVzaXplSGFuZGxlciIsIm5leHQiLCJjb250ZXh0IiwiaW5kZXgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInByb2dyZXNzIiwiaW5pdGlhbGlzZSIsImRlZmVyIiwid2luZG93Iiwib25yZXNpemUiLCJhZGRVc2VySW5wdXRIYW5kbGVyIiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJwYXJ0c0Zyb21DaGlsZEVsZW1lbnRzIiwiY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMiLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldFRpbWVvdXQiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoi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QyxNQUFqQixFQUF5QlcsTUFBekIsRUFBaUNhLElBQWpDOztBQUVBLGFBQU9vQixLQUFQO0FBQ0Q7Ozs7RUEvRWlCckQsTzs7QUFrRnBCdUQsT0FBT0MsT0FBUCxHQUFpQmxELEtBQWpCOztBQUVBLFNBQVN1QyxLQUFULENBQWUxQixRQUFmLEVBQXlCO0FBQ3ZCc0MsYUFBV3RDLFFBQVgsRUFBcUIsQ0FBckI7QUFDRDs7QUFFRCxTQUFTZ0Msc0JBQVQsQ0FBZ0NELGFBQWhDLEVBQStDO0FBQzdDLE1BQU0zQyxRQUFRMkMsY0FBY1EsTUFBZCxDQUFxQixVQUFDbkQsS0FBRCxFQUFRb0QsWUFBUixFQUF5QjtBQUMxRCxRQUFJQSx3QkFBd0I3RCxJQUE1QixFQUFrQztBQUNoQyxVQUFNa0MsT0FBTzJCLFlBQWIsQ0FEZ0MsQ0FDSjs7QUFFNUJwRCxZQUFNcUQsSUFBTixDQUFXNUIsSUFBWDtBQUNEO0FBQ0QsV0FBT3pCLEtBQVA7QUFDRCxHQVBhLEVBT1gsRUFQVyxDQUFkOztBQVNBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTNkMsdUJBQVQsQ0FBaUNGLGFBQWpDLEVBQWdEO0FBQzlDLE1BQU0xQyxTQUFTMEMsY0FBY1EsTUFBZCxDQUFxQixVQUFDbEQsTUFBRCxFQUFTbUQsWUFBVCxFQUEwQjtBQUM1RCxRQUFJbkQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CLFVBQUltRCx3QkFBd0I1RCxNQUE1QixFQUFvQztBQUNsQ1MsaUJBQVNtRCxZQUFULENBRGtDLENBQ1Y7QUFDekI7QUFDRjs7QUFFRCxXQUFPbkQsTUFBUDtBQUNELEdBUmMsRUFRWixJQVJZLENBQWY7O0FBVUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUGFydCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvcGFydCcpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBVc2VySW5wdXQgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dCcpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0LCAgLy8vXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGZvckVhY2godGhpcy5wYXJ0cywgKHBhcnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gcGFydHNMZW5ndGg7XG5cbiAgICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgICBkZWZlcigoKSA9PiB7XG4gICAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjb25zdCBwYXJ0cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChwYXJ0cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIFBhcnQpIHtcbiAgICAgIGNvbnN0IHBhcnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IGNhbWVyYSA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChjYW1lcmEsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjYW1lcmEgPT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDYW1lcmEpIHtcbiAgICAgICAgY2FtZXJhID0gY2hpbGRFbGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn1cbiJdfQ==