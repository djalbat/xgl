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
    value: function initialise() {
      var _this3 = this;

      var childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

      this.assignContext();

      this.onResize(resizeHandler);

      this.onUpdate(updateHandler);

      childElements.forEach(function (childElement) {
        childElement.initialise(_this3.canvas);
      });

      this.resizeHandler(); ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var canvas = properties.canvas,
          scene = Element.fromProperties(Scene, properties, canvas);


      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiU2NlbmUiLCJjYW52YXMiLCJyZXNpemVIYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJmb3JjZVVwZGF0ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwicmVuZGVyIiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImdldENoaWxkRWxlbWVudHMiLCJiaW5kIiwidXBkYXRlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJvblJlc2l6ZSIsIm9uVXBkYXRlIiwiaW5pdGlhbGlzZSIsInByb3BlcnRpZXMiLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLEs7OztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUhrQjtBQUluQjs7Ozs2QkFFUUMsYSxFQUFlO0FBQ3RCQyxhQUFPQyxRQUFQLEdBQWtCRixhQUFsQjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxjQUFjLEtBQUtKLE1BQUwsQ0FBWUssY0FBWixFQUFwQjtBQUFBLFVBQ01DLGVBQWUsS0FBS04sTUFBTCxDQUFZTyxlQUFaLEVBRHJCO0FBQUEsVUFFTUMsUUFBUUosV0FGZDtBQUFBLFVBRTRCO0FBQ3RCSyxlQUFTSCxZQUhmLENBRGMsQ0FJZ0I7O0FBRTlCLFdBQUtOLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkYsS0FBbkIsRUFBMEJDLE1BQTFCOztBQUVBLFdBQUtFLFdBQUwsQ0FBaUIsS0FBS1gsTUFBdEI7QUFDRDs7O2tDQUVhWSxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDMUYsV0FBS0MsTUFBTCxDQUFZTCxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsY0FBMUMsRUFBMERDLGdCQUExRCxFQUE0RUMsWUFBNUU7QUFDRDs7OzJCQUVNSixZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFBQTs7QUFDbkYsV0FBS2hCLE1BQUwsQ0FBWWtCLEtBQVo7O0FBRUEsV0FBS0MsYUFBTCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhSixNQUFiLENBQW9CLE9BQUtqQixNQUF6QixFQUFpQ1ksWUFBakMsRUFBK0NDLGNBQS9DLEVBQStEQyxjQUEvRCxFQUErRUMsZ0JBQS9FLEVBQWlHQyxZQUFqRyxDQUFsQjtBQUFBLE9BQTNCO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFVBQU1HLGdCQUFnQixLQUFLRyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01yQixnQkFBZ0IsS0FBS0EsYUFBTCxDQUFtQnNCLElBQW5CLENBQXdCLElBQXhCLENBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtBLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBRnRCOztBQUlBLFdBQUtFLGFBQUw7O0FBRUEsV0FBS0MsUUFBTCxDQUFjekIsYUFBZDs7QUFFQSxXQUFLMEIsUUFBTCxDQUFjSCxhQUFkOztBQUVBTCxvQkFBY0MsT0FBZCxDQUFzQixVQUFDQyxZQUFELEVBQWtCO0FBQ3RDQSxxQkFBYU8sVUFBYixDQUF3QixPQUFLNUIsTUFBN0I7QUFDRCxPQUZEOztBQUlBLFdBQUtDLGFBQUwsR0FmVyxDQWVXO0FBQ3ZCOzs7bUNBRXFCNEIsVSxFQUFZO0FBQzFCLFVBQUU3QixNQUFGLEdBQWE2QixVQUFiLENBQUU3QixNQUFGO0FBQUEsVUFDQThCLEtBREEsR0FDUWpDLFFBQVFrQyxjQUFSLENBQXVCaEMsS0FBdkIsRUFBOEI4QixVQUE5QixFQUEwQzdCLE1BQTFDLENBRFI7OztBQUdOOEIsWUFBTUYsVUFBTjs7QUFFQSxhQUFPRSxLQUFQO0FBQ0Q7Ozs7RUF6RGlCakMsTzs7QUE0RHBCbUMsT0FBT0MsT0FBUCxHQUFpQmxDLEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gcmVzaXplSGFuZGxlcjtcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZSh0aGlzLmNhbnZhcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIl19