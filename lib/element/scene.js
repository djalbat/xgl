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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiU2NlbmUiLCJjYW52YXMiLCJyZXNpemVIYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJmb3JjZVVwZGF0ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwicmVuZGVyIiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImRvbmUiLCJnZXRDaGlsZEVsZW1lbnRzIiwiYmluZCIsInVwZGF0ZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0Iiwib25SZXNpemUiLCJvblVwZGF0ZSIsImluaXRpYWxpc2UiLCJwcm9wZXJ0aWVzIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxLOzs7QUFDSixpQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUdsQixVQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFIa0I7QUFJbkI7Ozs7NkJBRVFDLGEsRUFBZTtBQUN0QkMsYUFBT0MsUUFBUCxHQUFrQkYsYUFBbEI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUcsY0FBYyxLQUFLSixNQUFMLENBQVlLLGNBQVosRUFBcEI7QUFBQSxVQUNNQyxlQUFlLEtBQUtOLE1BQUwsQ0FBWU8sZUFBWixFQURyQjtBQUFBLFVBRU1DLFFBQVFKLFdBRmQ7QUFBQSxVQUU0QjtBQUN0QkssZUFBU0gsWUFIZixDQURjLENBSWdCOztBQUU5QixXQUFLTixNQUFMLENBQVlVLE1BQVosQ0FBbUJGLEtBQW5CLEVBQTBCQyxNQUExQjs7QUFFQSxXQUFLRSxXQUFMLENBQWlCLEtBQUtYLE1BQXRCO0FBQ0Q7OztrQ0FFYVksWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQzFGLFdBQUtDLE1BQUwsQ0FBWUwsWUFBWixFQUEwQkMsY0FBMUIsRUFBMENDLGNBQTFDLEVBQTBEQyxnQkFBMUQsRUFBNEVDLFlBQTVFO0FBQ0Q7OzsyQkFFTUosWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQUE7O0FBQ25GLFdBQUtoQixNQUFMLENBQVlrQixLQUFaOztBQUVBLFdBQUtDLGFBQUwsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUosTUFBYixDQUFvQixPQUFLakIsTUFBekIsRUFBaUNZLFlBQWpDLEVBQStDQyxjQUEvQyxFQUErREMsY0FBL0QsRUFBK0VDLGdCQUEvRSxFQUFpR0MsWUFBakcsQ0FBbEI7QUFBQSxPQUEzQjtBQUNEOzs7K0JBRVVNLEksRUFBTTtBQUFBOztBQUNmLFVBQU1ILGdCQUFnQixLQUFLSSxnQkFBTCxFQUF0QjtBQUFBLFVBQ010QixnQkFBZ0IsS0FBS0EsYUFBTCxDQUFtQnVCLElBQW5CLENBQXdCLElBQXhCLENBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtBLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBRnRCOztBQUlBLFdBQUtFLGFBQUw7O0FBRUEsV0FBS0MsUUFBTCxDQUFjMUIsYUFBZDs7QUFFQSxXQUFLMkIsUUFBTCxDQUFjSCxhQUFkOztBQUVBTixvQkFBY0MsT0FBZCxDQUFzQixVQUFDQyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFRLFVBQWIsQ0FBd0IsT0FBSzdCLE1BQTdCLENBQWxCO0FBQUEsT0FBdEI7O0FBRUEsV0FBS0MsYUFBTCxHQWJlLENBYU87O0FBRXRCcUIsY0FBUUEsTUFBUixDQWZlLENBZUM7QUFDakI7OzttQ0FFcUJRLFUsRUFBWTtBQUFBLFVBQ3hCOUIsTUFEd0IsR0FDUDhCLFVBRE8sQ0FDeEI5QixNQUR3QjtBQUFBLFVBQ2hCc0IsSUFEZ0IsR0FDUFEsVUFETyxDQUNoQlIsSUFEZ0I7QUFBQSxVQUUxQlMsS0FGMEIsR0FFbEJsQyxRQUFRbUMsY0FBUixDQUF1QmpDLEtBQXZCLEVBQThCK0IsVUFBOUIsRUFBMEM5QixNQUExQyxDQUZrQjs7O0FBSWhDK0IsWUFBTUYsVUFBTixDQUFpQlAsSUFBakI7O0FBRUEsYUFBT1MsS0FBUDtBQUNEOzs7O0VBekRpQmxDLE87O0FBNERwQm9DLE9BQU9DLE9BQVAsR0FBaUJuQyxLQUFqQiIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUhhbmRsZXI7XG4gIH1cblxuICByZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LnJlbmRlcih0aGlzLmNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShkb25lKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25SZXNpemUocmVzaXplSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKHRoaXMuY2FudmFzKSk7XG5cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICBkb25lICYmIGRvbmUoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBkb25lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==