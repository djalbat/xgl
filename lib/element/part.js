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
          imageJSON = properties.imageJSON,
          canvas = properties.canvas,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromImageMapAndImageJSON(imageMap, imageJSON, canvas),
          part = Element.fromProperties(Part, properties, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJjYW52YXMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNoaWxkRWxlbWVudHMiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldENhbnZhcyIsImNvbG91clJlbmRlcmVyUHJvZ3JhbSIsImdldFByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwiYmluZCIsImNyZWF0ZUJ1ZmZlcnMiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VNYXAiLCJpbWFnZUpTT04iLCJmcm9tTm90aGluZyIsImZyb21JbWFnZU1hcEFuZEltYWdlSlNPTiIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlNRyxJOzs7QUFDSixnQkFBWUMsTUFBWixFQUFvQkMsY0FBcEIsRUFBb0NDLGVBQXBDLEVBQXFEO0FBQUE7O0FBQUEsNEdBQzdDRixNQUQ2Qzs7QUFHbkQsVUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUptRDtBQUtwRDs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRCxjQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLQyxlQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQ25GLFVBQU1SLFNBQVMsS0FBS1MsU0FBTCxFQUFmO0FBQUEsVUFDTUMsd0JBQXdCLEtBQUtULGNBQUwsQ0FBb0JVLFVBQXBCLEVBRDlCO0FBQUEsVUFFTUMseUJBQXlCLEtBQUtWLGVBQUwsQ0FBcUJTLFVBQXJCLEVBRi9COztBQUlBWCxhQUFPYSxVQUFQLENBQWtCSCxxQkFBbEI7O0FBRUEsV0FBS1QsY0FBTCxDQUFvQmEsV0FBcEIsQ0FBZ0NkLE1BQWhDOztBQUVBQSxhQUFPZSxNQUFQLENBQWMsS0FBS2QsY0FBbkIsRUFBbUNHLFlBQW5DLEVBQWlEQyxjQUFqRCxFQUFpRUMsY0FBakUsRUFBaUZDLGdCQUFqRixFQUFtR0MsWUFBbkc7O0FBRUFSLGFBQU9hLFVBQVAsQ0FBa0JELHNCQUFsQjs7QUFFQSxXQUFLVixlQUFMLENBQXFCWSxXQUFyQixDQUFpQ2QsTUFBakM7O0FBRUEsV0FBS0UsZUFBTCxDQUFxQmMsZUFBckIsQ0FBcUNoQixNQUFyQzs7QUFFQUEsYUFBT2UsTUFBUCxDQUFjLEtBQUtiLGVBQW5CLEVBQW9DRSxZQUFwQyxFQUFrREMsY0FBbEQsRUFBa0VDLGNBQWxFLEVBQWtGQyxnQkFBbEYsRUFBb0dDLFlBQXBHO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1SLFNBQVMsS0FBS1MsU0FBTCxFQUFmO0FBQUEsVUFDTVEsYUFBYSxFQURuQjtBQUFBLFVBRU1DLFNBQVMsS0FGZjs7QUFJQSxXQUFLZixhQUFMLENBQW1CZ0IsT0FBbkIsQ0FBMkIsVUFBU0MsWUFBVCxFQUF1QjtBQUNoREEscUJBQWFDLFVBQWIsQ0FBd0IsS0FBS3BCLGNBQTdCLEVBQTZDLEtBQUtDLGVBQWxELEVBQW1FZSxVQUFuRSxFQUErRUMsTUFBL0U7QUFDRCxPQUYwQixDQUV6QkksSUFGeUIsQ0FFcEIsSUFGb0IsQ0FBM0I7O0FBSUEsV0FBS3JCLGNBQUwsQ0FBb0JzQixhQUFwQixDQUFrQ3ZCLE1BQWxDOztBQUVBLFdBQUtFLGVBQUwsQ0FBcUJxQixhQUFyQixDQUFtQ3ZCLE1BQW5DO0FBQ0Q7OzttQ0FFcUJ3QixVLEVBQVk7QUFBQSxVQUN4QkMsUUFEd0IsR0FDUUQsVUFEUixDQUN4QkMsUUFEd0I7QUFBQSxVQUNkQyxTQURjLEdBQ1FGLFVBRFIsQ0FDZEUsU0FEYztBQUFBLFVBQ0gxQixNQURHLEdBQ1F3QixVQURSLENBQ0h4QixNQURHO0FBQUEsVUFFMUJDLGNBRjBCLEdBRVRKLGVBQWU4QixXQUFmLENBQTJCM0IsTUFBM0IsQ0FGUztBQUFBLFVBRzFCRSxlQUgwQixHQUdSSixnQkFBZ0I4Qix3QkFBaEIsQ0FBeUNILFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4RDFCLE1BQTlELENBSFE7QUFBQSxVQUkxQjZCLElBSjBCLEdBSW5CbEMsUUFBUW1DLGNBQVIsQ0FBdUIvQixJQUF2QixFQUE2QnlCLFVBQTdCLEVBQXlDdkIsY0FBekMsRUFBeURDLGVBQXpELENBSm1COzs7QUFNaEMsYUFBTzJCLElBQVA7QUFDRDs7OztFQTdEZ0JsQyxPOztBQWdFbkJvQyxPQUFPQyxPQUFQLEdBQWlCakMsSUFBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgc3VwZXIoY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuICBcbiAgZ2V0Q29sb3VyUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5hY3RpdmF0ZVRleHR1cmUoY2FudmFzKTtcbiAgICBcbiAgICBjYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdldENhbnZhcygpLFxuICAgICAgICAgIHRyYW5zZm9ybXMgPSBbXSxcbiAgICAgICAgICBtYXNrZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmluaXRpYWxpc2UodGhpcy5jb2xvdXJSZW5kZXJlciwgdGhpcy50ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTWFwLCBpbWFnZUpTT04sIGNhbnZhcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlSlNPTihpbWFnZU1hcCwgaW1hZ2VKU09OLCBjYW52YXMpLFxuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIFxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydDtcbiJdfQ==