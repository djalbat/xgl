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

  function Part(canvas, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this, canvas));

    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
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
      var canvas = this.getCanvas(),
          colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(canvas);

      canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(canvas);

      this.textureRenderer.activateTexture(canvas);

      canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      var canvas = this.getCanvas(),
          transforms = [],
          masked = false;

      this.childElements.forEach(function (childElement) {
        childElement.initialise(this.colourRenderer, this.textureRenderer, transforms, masked);
      }.bind(this));

      this.colourRenderer.createBuffers(canvas);

      this.textureRenderer.createBuffers(canvas);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var imageMap = properties.imageMap,
          canvas = properties.canvas,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromNothing(canvas),
          part = Element.fromProperties(Part, properties, colourRenderer, textureRenderer);


      if (imageMap) {
        textureRenderer.createTexture(imageMap, canvas);
      }

      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJjYW52YXMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNoaWxkRWxlbWVudHMiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldENhbnZhcyIsImNvbG91clJlbmRlcmVyUHJvZ3JhbSIsImdldFByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwiYmluZCIsImNyZWF0ZUJ1ZmZlcnMiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VNYXAiLCJmcm9tTm90aGluZyIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsImNyZWF0ZVRleHR1cmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7SUFJTUcsSTs7O0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLGNBQXBCLEVBQW9DQyxlQUFwQyxFQUFxRDtBQUFBOztBQUFBLDRHQUM3Q0YsTUFENkM7O0FBR25ELFVBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFKbUQ7QUFLcEQ7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0QsY0FBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7MkJBRU1DLFksRUFBY0MsYyxFQUFnQkMsYyxFQUFnQkMsZ0IsRUFBa0JDLFksRUFBYztBQUNuRixVQUFNUixTQUFTLEtBQUtTLFNBQUwsRUFBZjtBQUFBLFVBQ01DLHdCQUF3QixLQUFLVCxjQUFMLENBQW9CVSxVQUFwQixFQUQ5QjtBQUFBLFVBRU1DLHlCQUF5QixLQUFLVixlQUFMLENBQXFCUyxVQUFyQixFQUYvQjs7QUFJQVgsYUFBT2EsVUFBUCxDQUFrQkgscUJBQWxCOztBQUVBLFdBQUtULGNBQUwsQ0FBb0JhLFdBQXBCLENBQWdDZCxNQUFoQzs7QUFFQUEsYUFBT2UsTUFBUCxDQUFjLEtBQUtkLGNBQW5CLEVBQW1DRyxZQUFuQyxFQUFpREMsY0FBakQsRUFBaUVDLGNBQWpFLEVBQWlGQyxnQkFBakYsRUFBbUdDLFlBQW5HOztBQUVBUixhQUFPYSxVQUFQLENBQWtCRCxzQkFBbEI7O0FBRUEsV0FBS1YsZUFBTCxDQUFxQlksV0FBckIsQ0FBaUNkLE1BQWpDOztBQUVBLFdBQUtFLGVBQUwsQ0FBcUJjLGVBQXJCLENBQXFDaEIsTUFBckM7O0FBRUFBLGFBQU9lLE1BQVAsQ0FBYyxLQUFLYixlQUFuQixFQUFvQ0UsWUFBcEMsRUFBa0RDLGNBQWxELEVBQWtFQyxjQUFsRSxFQUFrRkMsZ0JBQWxGLEVBQW9HQyxZQUFwRztBQUNEOzs7aUNBRVk7QUFDWCxVQUFNUixTQUFTLEtBQUtTLFNBQUwsRUFBZjtBQUFBLFVBQ01RLGFBQWEsRUFEbkI7QUFBQSxVQUVNQyxTQUFTLEtBRmY7O0FBSUEsV0FBS2YsYUFBTCxDQUFtQmdCLE9BQW5CLENBQTJCLFVBQVNDLFlBQVQsRUFBdUI7QUFDaERBLHFCQUFhQyxVQUFiLENBQXdCLEtBQUtwQixjQUE3QixFQUE2QyxLQUFLQyxlQUFsRCxFQUFtRWUsVUFBbkUsRUFBK0VDLE1BQS9FO0FBQ0QsT0FGMEIsQ0FFekJJLElBRnlCLENBRXBCLElBRm9CLENBQTNCOztBQUlBLFdBQUtyQixjQUFMLENBQW9Cc0IsYUFBcEIsQ0FBa0N2QixNQUFsQzs7QUFFQSxXQUFLRSxlQUFMLENBQXFCcUIsYUFBckIsQ0FBbUN2QixNQUFuQztBQUNEOzs7bUNBRXFCd0IsVSxFQUFZO0FBQUEsVUFDeEJDLFFBRHdCLEdBQ0hELFVBREcsQ0FDeEJDLFFBRHdCO0FBQUEsVUFDZHpCLE1BRGMsR0FDSHdCLFVBREcsQ0FDZHhCLE1BRGM7QUFBQSxVQUUxQkMsY0FGMEIsR0FFVEosZUFBZTZCLFdBQWYsQ0FBMkIxQixNQUEzQixDQUZTO0FBQUEsVUFHMUJFLGVBSDBCLEdBR1JKLGdCQUFnQjRCLFdBQWhCLENBQTRCMUIsTUFBNUIsQ0FIUTtBQUFBLFVBSTFCMkIsSUFKMEIsR0FJbkJoQyxRQUFRaUMsY0FBUixDQUF1QjdCLElBQXZCLEVBQTZCeUIsVUFBN0IsRUFBeUN2QixjQUF6QyxFQUF5REMsZUFBekQsQ0FKbUI7OztBQU1oQyxVQUFJdUIsUUFBSixFQUFjO0FBQ1p2Qix3QkFBZ0IyQixhQUFoQixDQUE4QkosUUFBOUIsRUFBd0N6QixNQUF4QztBQUNEOztBQUVELGFBQU8yQixJQUFQO0FBQ0Q7Ozs7RUFqRWdCaEMsTzs7QUFvRW5CbUMsT0FBT0MsT0FBUCxHQUFpQmhDLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKGNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldENvbG91clJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clJlbmRlcmVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdldENhbnZhcygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMuY29sb3VyUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlclByb2dyYW0gPSB0aGlzLnRleHR1cmVSZW5kZXJlci5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShjb2xvdXJSZW5kZXJlclByb2dyYW0pO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHRleHR1cmVSZW5kZXJlclByb2dyYW0pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKGNhbnZhcyk7XG4gICAgXG4gICAgY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVSZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKSxcbiAgICAgICAgICB0cmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgbWFza2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKHRoaXMuY29sb3VyUmVuZGVyZXIsIHRoaXMudGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU1hcCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICBcbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVUZXh0dXJlKGltYWdlTWFwLCBjYW52YXMpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnQ7XG4iXX0=