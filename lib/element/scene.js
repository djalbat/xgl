'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene() {
    _classCallCheck(this, Scene);

    return _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).apply(this, arguments));
  }

  _createClass(Scene, [{
    key: 'resizeHandler',
    value: function resizeHandler() {
      var canvas = this.getCanvas(),
          clientWidth = canvas.getClientWidth(),
          clientHeight = canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      canvas.resize(width, height);

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var canvas = this.getCanvas();

      canvas.clear(); ///

      this.childElements.forEach(function (childElement) {
        childElement.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      });
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      var childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

      this.assignContext();

      this.onUpdate(updateHandler);

      window.onresize = resizeHandler;

      childElements.forEach(function (childElement) {
        childElement.initialise();
      });

      this.resizeHandler(); ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var scene = Element.fromProperties(Scene, properties);

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiU2NlbmUiLCJjYW52YXMiLCJnZXRDYW52YXMiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJmb3JjZVVwZGF0ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsInJlbmRlciIsImdldENoaWxkRWxlbWVudHMiLCJyZXNpemVIYW5kbGVyIiwiYmluZCIsInVwZGF0ZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0Iiwib25VcGRhdGUiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImluaXRpYWxpc2UiLCJwcm9wZXJ0aWVzIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxLOzs7Ozs7Ozs7OztvQ0FDWTtBQUNkLFVBQU1DLFNBQVMsS0FBS0MsU0FBTCxFQUFmO0FBQUEsVUFDTUMsY0FBY0YsT0FBT0csY0FBUCxFQURwQjtBQUFBLFVBRU1DLGVBQWVKLE9BQU9LLGVBQVAsRUFGckI7QUFBQSxVQUdNQyxRQUFRSixXQUhkO0FBQUEsVUFHNEI7QUFDdEJLLGVBQVNILFlBSmYsQ0FEYyxDQUtnQjs7QUFFOUJKLGFBQU9RLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQkMsTUFBckI7O0FBRUEsV0FBS0UsV0FBTDtBQUNEOzs7MkJBRU1DLFksRUFBY0MsYyxFQUFnQkMsYyxFQUFnQkMsZ0IsRUFBa0JDLFksRUFBYztBQUNuRixVQUFNZCxTQUFTLEtBQUtDLFNBQUwsRUFBZjs7QUFFQUQsYUFBT2UsS0FBUCxHQUhtRixDQUduRTs7QUFFaEIsV0FBS0MsYUFBTCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBU0MsWUFBVCxFQUF1QjtBQUNoREEscUJBQWFDLE1BQWIsQ0FBb0JULFlBQXBCLEVBQWtDQyxjQUFsQyxFQUFrREMsY0FBbEQsRUFBa0VDLGdCQUFsRSxFQUFvRkMsWUFBcEY7QUFDRCxPQUZEO0FBR0Q7OztrQ0FFYUosWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQzFGLFdBQUtLLE1BQUwsQ0FBWVQsWUFBWixFQUEwQkMsY0FBMUIsRUFBMENDLGNBQTFDLEVBQTBEQyxnQkFBMUQsRUFBNEVDLFlBQTVFO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1FLGdCQUFnQixLQUFLSSxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLGdCQUFnQixLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUR0QjtBQUFBLFVBRU1DLGdCQUFnQixLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUZ0Qjs7QUFJQSxXQUFLRSxhQUFMOztBQUVBLFdBQUtDLFFBQUwsQ0FBY0YsYUFBZDs7QUFFQUcsYUFBT0MsUUFBUCxHQUFrQk4sYUFBbEI7O0FBRUFMLG9CQUFjQyxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhVSxVQUFiO0FBQ0QsT0FGRDs7QUFJQSxXQUFLUCxhQUFMLEdBZlcsQ0FlVztBQUN2Qjs7O21DQUVxQlEsVSxFQUFZO0FBQ2hDLFVBQU1DLFFBQVFqQyxRQUFRa0MsY0FBUixDQUF1QmhDLEtBQXZCLEVBQThCOEIsVUFBOUIsQ0FBZDs7QUFFQUMsWUFBTUYsVUFBTjs7QUFFQSxhQUFPRSxLQUFQO0FBQ0Q7Ozs7RUFuRGlCakMsTzs7QUFzRHBCbUMsT0FBT0MsT0FBUCxHQUFpQmxDLEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICByZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCksXG4gICAgICAgICAgY2xpZW50V2lkdGggPSBjYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSBjYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKTtcblxuICAgIGNhbnZhcy5jbGVhcigpOyAvLy9cblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LnJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh1cGRhdGVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUhhbmRsZXI7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=