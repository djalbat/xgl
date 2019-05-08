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

  function Part(textureRenderer, colourRenderer, canvas) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.textureRenderer = textureRenderer;

    _this.colourRenderer = colourRenderer;

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
      var textureRenderer = this.textureRenderer,
          colourRenderer = this.colourRenderer,
          transforms = [],
          masked = false;

      this.childElements.forEach(function (childElement) {
        childElement.initialise(textureRenderer, colourRenderer, transforms, masked);
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
          part = Element.fromProperties(Part, properties, textureRenderer, colourRenderer, canvas);


      part.initialise();

      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJjb2xvdXJSZW5kZXJlciIsImNhbnZhcyIsImNoaWxkRWxlbWVudHMiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImNvbG91clJlbmRlcmVyUHJvZ3JhbSIsImdldFByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwiYmluZCIsImNyZWF0ZUJ1ZmZlcnMiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VNYXAiLCJpbWFnZUpTT04iLCJmcm9tTm90aGluZyIsImZyb21JbWFnZU1hcEFuZEltYWdlSlNPTiIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlNRyxJOzs7QUFDSixnQkFBWUMsZUFBWixFQUE2QkMsY0FBN0IsRUFBNkNDLE1BQTdDLEVBQXFEO0FBQUE7O0FBQUE7O0FBR25ELFVBQUtGLGVBQUwsR0FBdUJBLGVBQXZCOztBQUVBLFVBQUtDLGNBQUwsR0FBc0JBLGNBQXRCOztBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQVBtRDtBQVFwRDs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRCxjQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLRCxlQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLRyxhQUFaO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQ25GLFVBQU1DLHdCQUF3QixLQUFLUixjQUFMLENBQW9CUyxVQUFwQixFQUE5QjtBQUFBLFVBQ01DLHlCQUF5QixLQUFLWCxlQUFMLENBQXFCVSxVQUFyQixFQUQvQjs7QUFHQSxXQUFLUixNQUFMLENBQVlVLFVBQVosQ0FBdUJILHFCQUF2Qjs7QUFFQSxXQUFLUixjQUFMLENBQW9CWSxXQUFwQixDQUFnQyxLQUFLWCxNQUFyQzs7QUFFQSxXQUFLQSxNQUFMLENBQVlZLE1BQVosQ0FBbUIsS0FBS2IsY0FBeEIsRUFBd0NHLFlBQXhDLEVBQXNEQyxjQUF0RCxFQUFzRUMsY0FBdEUsRUFBc0ZDLGdCQUF0RixFQUF3R0MsWUFBeEc7O0FBRUEsV0FBS04sTUFBTCxDQUFZVSxVQUFaLENBQXVCRCxzQkFBdkI7O0FBRUEsV0FBS1gsZUFBTCxDQUFxQmEsV0FBckIsQ0FBaUMsS0FBS1gsTUFBdEM7O0FBRUEsV0FBS0YsZUFBTCxDQUFxQmUsZUFBckIsQ0FBcUMsS0FBS2IsTUFBMUM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZWSxNQUFaLENBQW1CLEtBQUtkLGVBQXhCLEVBQXlDSSxZQUF6QyxFQUF1REMsY0FBdkQsRUFBdUVDLGNBQXZFLEVBQXVGQyxnQkFBdkYsRUFBeUdDLFlBQXpHO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1SLGtCQUFrQixLQUFLQSxlQUE3QjtBQUFBLFVBQ01DLGlCQUFpQixLQUFLQSxjQUQ1QjtBQUFBLFVBRU1lLGFBQWEsRUFGbkI7QUFBQSxVQUdNQyxTQUFTLEtBSGY7O0FBS0EsV0FBS2QsYUFBTCxDQUFtQmUsT0FBbkIsQ0FBMkIsVUFBU0MsWUFBVCxFQUF1QjtBQUNoREEscUJBQWFDLFVBQWIsQ0FBd0JwQixlQUF4QixFQUF5Q0MsY0FBekMsRUFBeURlLFVBQXpELEVBQXFFQyxNQUFyRTtBQUNELE9BRjBCLENBRXpCSSxJQUZ5QixDQUVwQixJQUZvQixDQUEzQjs7QUFJQSxXQUFLcEIsY0FBTCxDQUFvQnFCLGFBQXBCLENBQWtDLEtBQUtwQixNQUF2Qzs7QUFFQSxXQUFLRixlQUFMLENBQXFCc0IsYUFBckIsQ0FBbUMsS0FBS3BCLE1BQXhDO0FBQ0Q7OzttQ0FFcUJxQixVLEVBQVk7QUFBQSxVQUN4QkMsUUFEd0IsR0FDUUQsVUFEUixDQUN4QkMsUUFEd0I7QUFBQSxVQUNkQyxTQURjLEdBQ1FGLFVBRFIsQ0FDZEUsU0FEYztBQUFBLFVBQ0h2QixNQURHLEdBQ1FxQixVQURSLENBQ0hyQixNQURHO0FBQUEsVUFFMUJELGNBRjBCLEdBRVRKLGVBQWU2QixXQUFmLENBQTJCeEIsTUFBM0IsQ0FGUztBQUFBLFVBRzFCRixlQUgwQixHQUdSRixnQkFBZ0I2Qix3QkFBaEIsQ0FBeUNILFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4RHZCLE1BQTlELENBSFE7QUFBQSxVQUkxQjBCLElBSjBCLEdBSW5CakMsUUFBUWtDLGNBQVIsQ0FBdUI5QixJQUF2QixFQUE2QndCLFVBQTdCLEVBQXlDdkIsZUFBekMsRUFBMERDLGNBQTFELEVBQTBFQyxNQUExRSxDQUptQjs7O0FBTWhDMEIsV0FBS1IsVUFBTDs7QUFFQSxhQUFPUSxJQUFQO0FBQ0Q7Ozs7RUFsRWdCakMsTzs7QUFxRW5CbUMsT0FBT0MsT0FBUCxHQUFpQmhDLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHR1cmVSZW5kZXJlciwgY29sb3VyUmVuZGVyZXIsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG4gIFxuICBnZXRDb2xvdXJSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJSZW5kZXJlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0oY29sb3VyUmVuZGVyZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbSh0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHRleHR1cmVSZW5kZXJlciA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gdGhpcy5jb2xvdXJSZW5kZXJlcixcbiAgICAgICAgICB0cmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgbWFza2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKHRleHR1cmVSZW5kZXJlciwgY29sb3VyUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU1hcCwgaW1hZ2VKU09OLCBjYW52YXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZUpTT04oaW1hZ2VNYXAsIGltYWdlSlNPTiwgY2FudmFzKSxcbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCB0ZXh0dXJlUmVuZGVyZXIsIGNvbG91clJlbmRlcmVyLCBjYW52YXMpO1xuXG4gICAgcGFydC5pbml0aWFsaXNlKCk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuIl19