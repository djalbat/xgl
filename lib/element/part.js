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
      });

      this.textureRenderer.createBuffers(this.canvas);

      this.colourRenderer.createBuffers(this.canvas);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJjb2xvdXJSZW5kZXJlciIsImNhbnZhcyIsImNoaWxkRWxlbWVudHMiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImNvbG91clJlbmRlcmVyUHJvZ3JhbSIsImdldFByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwiY3JlYXRlQnVmZmVycyIsInByb3BlcnRpZXMiLCJpbWFnZU1hcCIsImltYWdlSlNPTiIsImZyb21Ob3RoaW5nIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VKU09OIiwicGFydCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0lBSU1HLEk7OztBQUNKLGdCQUFZQyxlQUFaLEVBQTZCQyxjQUE3QixFQUE2Q0MsTUFBN0MsRUFBcUQ7QUFBQTs7QUFBQTs7QUFHbkQsVUFBS0YsZUFBTCxHQUF1QkEsZUFBdkI7O0FBRUEsVUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7O0FBRUEsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBUG1EO0FBUXBEOzs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtELGNBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixhQUFPLEtBQUtELGVBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtHLGFBQVo7QUFDRDs7OzJCQUVNQyxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDbkYsVUFBTUMsd0JBQXdCLEtBQUtSLGNBQUwsQ0FBb0JTLFVBQXBCLEVBQTlCO0FBQUEsVUFDTUMseUJBQXlCLEtBQUtYLGVBQUwsQ0FBcUJVLFVBQXJCLEVBRC9COztBQUdBLFdBQUtSLE1BQUwsQ0FBWVUsVUFBWixDQUF1QkgscUJBQXZCOztBQUVBLFdBQUtSLGNBQUwsQ0FBb0JZLFdBQXBCLENBQWdDLEtBQUtYLE1BQXJDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWVksTUFBWixDQUFtQixLQUFLYixjQUF4QixFQUF3Q0csWUFBeEMsRUFBc0RDLGNBQXRELEVBQXNFQyxjQUF0RSxFQUFzRkMsZ0JBQXRGLEVBQXdHQyxZQUF4Rzs7QUFFQSxXQUFLTixNQUFMLENBQVlVLFVBQVosQ0FBdUJELHNCQUF2Qjs7QUFFQSxXQUFLWCxlQUFMLENBQXFCYSxXQUFyQixDQUFpQyxLQUFLWCxNQUF0Qzs7QUFFQSxXQUFLRixlQUFMLENBQXFCZSxlQUFyQixDQUFxQyxLQUFLYixNQUExQzs7QUFFQSxXQUFLQSxNQUFMLENBQVlZLE1BQVosQ0FBbUIsS0FBS2QsZUFBeEIsRUFBeUNJLFlBQXpDLEVBQXVEQyxjQUF2RCxFQUF1RUMsY0FBdkUsRUFBdUZDLGdCQUF2RixFQUF5R0MsWUFBekc7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTVIsa0JBQWtCLEtBQUtBLGVBQTdCO0FBQUEsVUFDTUMsaUJBQWlCLEtBQUtBLGNBRDVCO0FBQUEsVUFFTWUsYUFBYSxFQUZuQjtBQUFBLFVBR01DLFNBQVMsS0FIZjs7QUFLQSxXQUFLZCxhQUFMLENBQW1CZSxPQUFuQixDQUEyQixVQUFDQyxZQUFELEVBQWtCO0FBQzNDQSxxQkFBYUMsVUFBYixDQUF3QnBCLGVBQXhCLEVBQXlDQyxjQUF6QyxFQUF5RGUsVUFBekQsRUFBcUVDLE1BQXJFO0FBQ0QsT0FGRDs7QUFJQSxXQUFLakIsZUFBTCxDQUFxQnFCLGFBQXJCLENBQW1DLEtBQUtuQixNQUF4Qzs7QUFFQSxXQUFLRCxjQUFMLENBQW9Cb0IsYUFBcEIsQ0FBa0MsS0FBS25CLE1BQXZDO0FBQ0Q7OzttQ0FFcUJvQixVLEVBQVk7QUFBQSxVQUN4QkMsUUFEd0IsR0FDUUQsVUFEUixDQUN4QkMsUUFEd0I7QUFBQSxVQUNkQyxTQURjLEdBQ1FGLFVBRFIsQ0FDZEUsU0FEYztBQUFBLFVBQ0h0QixNQURHLEdBQ1FvQixVQURSLENBQ0hwQixNQURHO0FBQUEsVUFFMUJELGNBRjBCLEdBRVRKLGVBQWU0QixXQUFmLENBQTJCdkIsTUFBM0IsQ0FGUztBQUFBLFVBRzFCRixlQUgwQixHQUdSRixnQkFBZ0I0Qix3QkFBaEIsQ0FBeUNILFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4RHRCLE1BQTlELENBSFE7QUFBQSxVQUkxQnlCLElBSjBCLEdBSW5CaEMsUUFBUWlDLGNBQVIsQ0FBdUI3QixJQUF2QixFQUE2QnVCLFVBQTdCLEVBQXlDdEIsZUFBekMsRUFBMERDLGNBQTFELEVBQTBFQyxNQUExRSxDQUptQjs7O0FBTWhDeUIsV0FBS1AsVUFBTDs7QUFFQSxhQUFPTyxJQUFQO0FBQ0Q7Ozs7RUFsRWdCaEMsTzs7QUFxRW5Ca0MsT0FBT0MsT0FBUCxHQUFpQi9CLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHR1cmVSZW5kZXJlciwgY29sb3VyUmVuZGVyZXIsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG4gIFxuICBnZXRDb2xvdXJSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJSZW5kZXJlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0oY29sb3VyUmVuZGVyZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbSh0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHRleHR1cmVSZW5kZXJlciA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gdGhpcy5jb2xvdXJSZW5kZXJlcixcbiAgICAgICAgICB0cmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgbWFza2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZSh0ZXh0dXJlUmVuZGVyZXIsIGNvbG91clJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTWFwLCBpbWFnZUpTT04sIGNhbnZhcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlSlNPTihpbWFnZU1hcCwgaW1hZ2VKU09OLCBjYW52YXMpLFxuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIHRleHR1cmVSZW5kZXJlciwgY29sb3VyUmVuZGVyZXIsIGNhbnZhcyk7XG5cbiAgICBwYXJ0LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnQ7XG4iXX0=