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

  function Part(imageMap, imageMapJSON, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.imageMap = imageMap;
    _this.imageMapJSON = imageMapJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Part, [{
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
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
    value: function initialise(canvas) {
      var childElements = this.getChildElements(),
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
      });

      childElements.forEach(function (childElement) {
        return childElement.render(colourRenderer, textureRenderer);
      });

      colourRenderer.createBuffers(canvas);

      textureRenderer.createBuffers(canvas);

      this.colourRenderer = colourRenderer;

      this.textureRenderer = textureRenderer;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var imageMap = properties.imageMap,
          imageMapJSON = properties.imageMapJSON,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, imageMap, imageMapJSON, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJpbWFnZU1hcCIsImltYWdlTWFwSlNPTiIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FudmFzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJjb2xvdXJSZW5kZXJlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlciIsImFjdGl2YXRlVGV4dHVyZSIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZnJvbU5vdGhpbmciLCJmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04iLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MiLCJjcmVhdGVCdWZmZXJzIiwicHJvcGVydGllcyIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlNRyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0NDLGNBQXBDLEVBQW9EQyxlQUFwRCxFQUFxRTtBQUFBOztBQUFBOztBQUduRSxVQUFLSCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQU5tRTtBQU9wRTs7OzsyQkFFTUMsTSxFQUFRQyxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDM0YsVUFBTUMsd0JBQXdCLEtBQUtSLGNBQUwsQ0FBb0JTLFVBQXBCLEVBQTlCO0FBQUEsVUFDTUMseUJBQXlCLEtBQUtULGVBQUwsQ0FBcUJRLFVBQXJCLEVBRC9COztBQUdBUCxhQUFPUyxVQUFQLENBQWtCSCxxQkFBbEI7O0FBRUEsV0FBS1IsY0FBTCxDQUFvQlksV0FBcEIsQ0FBZ0NWLE1BQWhDOztBQUVBQSxhQUFPVyxNQUFQLENBQWMsS0FBS2IsY0FBbkIsRUFBbUNHLFlBQW5DLEVBQWlEQyxjQUFqRCxFQUFpRUMsY0FBakUsRUFBaUZDLGdCQUFqRixFQUFtR0MsWUFBbkc7O0FBRUFMLGFBQU9TLFVBQVAsQ0FBa0JELHNCQUFsQjs7QUFFQSxXQUFLVCxlQUFMLENBQXFCVyxXQUFyQixDQUFpQ1YsTUFBakM7O0FBRUEsV0FBS0QsZUFBTCxDQUFxQmEsZUFBckIsQ0FBcUNaLE1BQXJDOztBQUVBQSxhQUFPVyxNQUFQLENBQWMsS0FBS1osZUFBbkIsRUFBb0NFLFlBQXBDLEVBQWtEQyxjQUFsRCxFQUFrRUMsY0FBbEUsRUFBa0ZDLGdCQUFsRixFQUFvR0MsWUFBcEc7QUFDRDs7OytCQUVVTCxNLEVBQVE7QUFDakIsVUFBTWEsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTWhCLGlCQUFpQkwsZUFBZXNCLFdBQWYsQ0FBMkJmLE1BQTNCLENBRHZCO0FBQUEsVUFFTUQsa0JBQWtCTCxnQkFBZ0JzQiwyQkFBaEIsQ0FBNEMsS0FBS3BCLFFBQWpELEVBQTJELEtBQUtDLFlBQWhFLEVBQThFRyxNQUE5RSxDQUZ4Qjs7QUFJQWEsb0JBQWNJLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhQyx1QkFBYixFQUFsQjtBQUFBLE9BQXRCOztBQUVBTixvQkFBY0ksT0FBZCxDQUFzQixVQUFDQyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFQLE1BQWIsQ0FBb0JiLGNBQXBCLEVBQW9DQyxlQUFwQyxDQUFsQjtBQUFBLE9BQXRCOztBQUVBRCxxQkFBZXNCLGFBQWYsQ0FBNkJwQixNQUE3Qjs7QUFFQUQsc0JBQWdCcUIsYUFBaEIsQ0FBOEJwQixNQUE5Qjs7QUFFQSxXQUFLRixjQUFMLEdBQXNCQSxjQUF0Qjs7QUFFQSxXQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7bUNBRXFCc0IsVSxFQUFZO0FBQUEsVUFDeEJ6QixRQUR3QixHQUNHeUIsVUFESCxDQUN4QnpCLFFBRHdCO0FBQUEsVUFDZEMsWUFEYyxHQUNHd0IsVUFESCxDQUNkeEIsWUFEYztBQUFBLFVBRTFCQyxjQUYwQixHQUVULElBRlM7QUFBQSxVQUcxQkMsZUFIMEIsR0FHUixJQUhRO0FBQUEsVUFJMUJ1QixJQUowQixHQUluQi9CLFFBQVFnQyxjQUFSLENBQXVCNUIsSUFBdkIsRUFBNkIwQixVQUE3QixFQUF5Q3pCLFFBQXpDLEVBQW1EQyxZQUFuRCxFQUFpRUMsY0FBakUsRUFBaUZDLGVBQWpGLENBSm1COzs7QUFNaEMsYUFBT3VCLElBQVA7QUFDRDs7OztFQXREZ0IvQixPOztBQXlEbkJpQyxPQUFPQyxPQUFQLEdBQWlCOUIsSUFBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5hY3RpdmF0ZVRleHR1cmUoY2FudmFzKTtcbiAgICBcbiAgICBjYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04odGhpcy5pbWFnZU1hcCwgdGhpcy5pbWFnZU1hcEpTT04sIGNhbnZhcyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTWFwLCBpbWFnZU1hcEpTT04gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnQ7XG4iXX0=