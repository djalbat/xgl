'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    TextureRenderer = require('../renderer/texture');

var Part = function (_Element) {
  _inherits(Part, _Element);

  function Part(colourRenderer, textureRenderer, canvas) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.colourRenderer = colourRenderer;

    _this.textureRenderer = textureRenderer;

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Part, [{
    key: 'getColourRenderer',
    value: function getColourRenderer() {
      return this.colourRenderer;
    }
  }, {
    key: 'getTextureRenderer',
    value: function getTextureRenderer() {
      return this.textureRenderer;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      return this.childElements;
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      this.canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(this.canvas);

      this.canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      this.canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(this.canvas);

      this.textureRenderer.activateTexture(this.canvas);

      this.canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      var transforms = [],
          masked = false;

      this.childElements.forEach(function (childElement) {
        childElement.initialise(this.colourRenderer, this.textureRenderer, transforms, masked);
      }.bind(this));

      this.colourRenderer.createBuffers(this.canvas);

      this.textureRenderer.createBuffers(this.canvas);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var imageMap = properties.imageMap,
          imageJSON = properties.imageJSON,
          canvas = properties.canvas,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromImageMapAndImageJSON(imageMap, imageJSON, canvas),
          part = Element.fromProperties(Part, properties, colourRenderer, textureRenderer, canvas);


      part.initialise();

      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNhbnZhcyIsImNoaWxkRWxlbWVudHMiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImNvbG91clJlbmRlcmVyUHJvZ3JhbSIsImdldFByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwiYmluZCIsImNyZWF0ZUJ1ZmZlcnMiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VNYXAiLCJpbWFnZUpTT04iLCJmcm9tTm90aGluZyIsImZyb21JbWFnZU1hcEFuZEltYWdlSlNPTiIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlNRyxJOzs7QUFDSixnQkFBWUMsY0FBWixFQUE0QkMsZUFBNUIsRUFBNkNDLE1BQTdDLEVBQXFEO0FBQUE7O0FBQUE7O0FBR25ELFVBQUtGLGNBQUwsR0FBc0JBLGNBQXRCOztBQUVBLFVBQUtDLGVBQUwsR0FBdUJBLGVBQXZCOztBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQVBtRDtBQVFwRDs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRixjQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLQyxlQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLRSxhQUFaO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQ25GLFVBQU1DLHdCQUF3QixLQUFLVCxjQUFMLENBQW9CVSxVQUFwQixFQUE5QjtBQUFBLFVBQ01DLHlCQUF5QixLQUFLVixlQUFMLENBQXFCUyxVQUFyQixFQUQvQjs7QUFHQSxXQUFLUixNQUFMLENBQVlVLFVBQVosQ0FBdUJILHFCQUF2Qjs7QUFFQSxXQUFLVCxjQUFMLENBQW9CYSxXQUFwQixDQUFnQyxLQUFLWCxNQUFyQzs7QUFFQSxXQUFLQSxNQUFMLENBQVlZLE1BQVosQ0FBbUIsS0FBS2QsY0FBeEIsRUFBd0NJLFlBQXhDLEVBQXNEQyxjQUF0RCxFQUFzRUMsY0FBdEUsRUFBc0ZDLGdCQUF0RixFQUF3R0MsWUFBeEc7O0FBRUEsV0FBS04sTUFBTCxDQUFZVSxVQUFaLENBQXVCRCxzQkFBdkI7O0FBRUEsV0FBS1YsZUFBTCxDQUFxQlksV0FBckIsQ0FBaUMsS0FBS1gsTUFBdEM7O0FBRUEsV0FBS0QsZUFBTCxDQUFxQmMsZUFBckIsQ0FBcUMsS0FBS2IsTUFBMUM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZWSxNQUFaLENBQW1CLEtBQUtiLGVBQXhCLEVBQXlDRyxZQUF6QyxFQUF1REMsY0FBdkQsRUFBdUVDLGNBQXZFLEVBQXVGQyxnQkFBdkYsRUFBeUdDLFlBQXpHO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1RLGFBQWEsRUFBbkI7QUFBQSxVQUNNQyxTQUFTLEtBRGY7O0FBR0EsV0FBS2QsYUFBTCxDQUFtQmUsT0FBbkIsQ0FBMkIsVUFBU0MsWUFBVCxFQUF1QjtBQUNoREEscUJBQWFDLFVBQWIsQ0FBd0IsS0FBS3BCLGNBQTdCLEVBQTZDLEtBQUtDLGVBQWxELEVBQW1FZSxVQUFuRSxFQUErRUMsTUFBL0U7QUFDRCxPQUYwQixDQUV6QkksSUFGeUIsQ0FFcEIsSUFGb0IsQ0FBM0I7O0FBSUEsV0FBS3JCLGNBQUwsQ0FBb0JzQixhQUFwQixDQUFrQyxLQUFLcEIsTUFBdkM7O0FBRUEsV0FBS0QsZUFBTCxDQUFxQnFCLGFBQXJCLENBQW1DLEtBQUtwQixNQUF4QztBQUNEOzs7bUNBRXFCcUIsVSxFQUFZO0FBQUEsVUFDeEJDLFFBRHdCLEdBQ1FELFVBRFIsQ0FDeEJDLFFBRHdCO0FBQUEsVUFDZEMsU0FEYyxHQUNRRixVQURSLENBQ2RFLFNBRGM7QUFBQSxVQUNIdkIsTUFERyxHQUNRcUIsVUFEUixDQUNIckIsTUFERztBQUFBLFVBRTFCRixjQUYwQixHQUVUSCxlQUFlNkIsV0FBZixDQUEyQnhCLE1BQTNCLENBRlM7QUFBQSxVQUcxQkQsZUFIMEIsR0FHUkgsZ0JBQWdCNkIsd0JBQWhCLENBQXlDSCxRQUF6QyxFQUFtREMsU0FBbkQsRUFBOER2QixNQUE5RCxDQUhRO0FBQUEsVUFJMUIwQixJQUowQixHQUluQmpDLFFBQVFrQyxjQUFSLENBQXVCOUIsSUFBdkIsRUFBNkJ3QixVQUE3QixFQUF5Q3ZCLGNBQXpDLEVBQXlEQyxlQUF6RCxFQUEwRUMsTUFBMUUsQ0FKbUI7OztBQU1oQzBCLFdBQUtSLFVBQUw7O0FBRUEsYUFBT1EsSUFBUDtBQUNEOzs7O0VBaEVnQmpDLE87O0FBbUVuQm1DLE9BQU9DLE9BQVAsR0FBaUJoQyxJQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgQ29sb3VyUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMuY29sb3VyUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlclByb2dyYW0gPSB0aGlzLnRleHR1cmVSZW5kZXJlci5nZXRQcm9ncmFtKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgbWFza2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKHRoaXMuY29sb3VyUmVuZGVyZXIsIHRoaXMudGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VNYXAsIGltYWdlSlNPTiwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VKU09OKGltYWdlTWFwLCBpbWFnZUpTT04sIGNhbnZhcyksXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgY2FudmFzKTtcblxuICAgIHBhcnQuaW5pdGlhbGlzZSgpO1xuICAgIFxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydDtcbiJdfQ==