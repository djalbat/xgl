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

  function Part(imageMap, imageJSON, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.imageMap = imageMap;
    _this.imageJSON = imageJSON;
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
      var transforms = [],
          masking = false,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromImageMapAndImageJSON(this.imageMap, this.imageJSON, canvas);

      this.childElements.forEach(function (childElement) {
        return childElement.initialise(colourRenderer, textureRenderer, transforms, masking);
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
          imageJSON = properties.imageJSON,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, imageMap, imageJSON, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJpbWFnZU1hcCIsImltYWdlSlNPTiIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FudmFzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJjb2xvdXJSZW5kZXJlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlciIsImFjdGl2YXRlVGV4dHVyZSIsInRyYW5zZm9ybXMiLCJtYXNraW5nIiwiZnJvbU5vdGhpbmciLCJmcm9tSW1hZ2VNYXBBbmRJbWFnZUpTT04iLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImluaXRpYWxpc2UiLCJjcmVhdGVCdWZmZXJzIiwicHJvcGVydGllcyIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlNRyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUNDLGNBQWpDLEVBQWlEQyxlQUFqRCxFQUFrRTtBQUFBOztBQUFBOztBQUdoRSxVQUFLSCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQU5nRTtBQU9qRTs7OzsyQkFFTUMsTSxFQUFRQyxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDM0YsVUFBTUMsd0JBQXdCLEtBQUtSLGNBQUwsQ0FBb0JTLFVBQXBCLEVBQTlCO0FBQUEsVUFDTUMseUJBQXlCLEtBQUtULGVBQUwsQ0FBcUJRLFVBQXJCLEVBRC9COztBQUdBUCxhQUFPUyxVQUFQLENBQWtCSCxxQkFBbEI7O0FBRUEsV0FBS1IsY0FBTCxDQUFvQlksV0FBcEIsQ0FBZ0NWLE1BQWhDOztBQUVBQSxhQUFPVyxNQUFQLENBQWMsS0FBS2IsY0FBbkIsRUFBbUNHLFlBQW5DLEVBQWlEQyxjQUFqRCxFQUFpRUMsY0FBakUsRUFBaUZDLGdCQUFqRixFQUFtR0MsWUFBbkc7O0FBRUFMLGFBQU9TLFVBQVAsQ0FBa0JELHNCQUFsQjs7QUFFQSxXQUFLVCxlQUFMLENBQXFCVyxXQUFyQixDQUFpQ1YsTUFBakM7O0FBRUEsV0FBS0QsZUFBTCxDQUFxQmEsZUFBckIsQ0FBcUNaLE1BQXJDOztBQUVBQSxhQUFPVyxNQUFQLENBQWMsS0FBS1osZUFBbkIsRUFBb0NFLFlBQXBDLEVBQWtEQyxjQUFsRCxFQUFrRUMsY0FBbEUsRUFBa0ZDLGdCQUFsRixFQUFvR0MsWUFBcEc7QUFDRDs7OytCQUVVTCxNLEVBQVE7QUFDakIsVUFBTWEsYUFBYSxFQUFuQjtBQUFBLFVBQ01DLFVBQVUsS0FEaEI7QUFBQSxVQUVNaEIsaUJBQWlCTCxlQUFlc0IsV0FBZixDQUEyQmYsTUFBM0IsQ0FGdkI7QUFBQSxVQUdNRCxrQkFBa0JMLGdCQUFnQnNCLHdCQUFoQixDQUF5QyxLQUFLcEIsUUFBOUMsRUFBd0QsS0FBS0MsU0FBN0QsRUFBd0VHLE1BQXhFLENBSHhCOztBQUtBLFdBQUtpQixhQUFMLENBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFDLFVBQWIsQ0FBd0J0QixjQUF4QixFQUF3Q0MsZUFBeEMsRUFBeURjLFVBQXpELEVBQXFFQyxPQUFyRSxDQUFsQjtBQUFBLE9BQTNCOztBQUVBaEIscUJBQWV1QixhQUFmLENBQTZCckIsTUFBN0I7O0FBRUFELHNCQUFnQnNCLGFBQWhCLENBQThCckIsTUFBOUI7O0FBRUEsV0FBS0YsY0FBTCxHQUFzQkEsY0FBdEI7O0FBRUEsV0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7O21DQUVxQnVCLFUsRUFBWTtBQUFBLFVBQ3hCMUIsUUFEd0IsR0FDQTBCLFVBREEsQ0FDeEIxQixRQUR3QjtBQUFBLFVBQ2RDLFNBRGMsR0FDQXlCLFVBREEsQ0FDZHpCLFNBRGM7QUFBQSxVQUUxQkMsY0FGMEIsR0FFVCxJQUZTO0FBQUEsVUFHMUJDLGVBSDBCLEdBR1IsSUFIUTtBQUFBLFVBSTFCd0IsSUFKMEIsR0FJbkJoQyxRQUFRaUMsY0FBUixDQUF1QjdCLElBQXZCLEVBQTZCMkIsVUFBN0IsRUFBeUMxQixRQUF6QyxFQUFtREMsU0FBbkQsRUFBOERDLGNBQTlELEVBQThFQyxlQUE5RSxDQUptQjs7O0FBTWhDLGFBQU93QixJQUFQO0FBQ0Q7Ozs7RUFyRGdCaEMsTzs7QUF3RG5Ca0MsT0FBT0MsT0FBUCxHQUFpQi9CLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlTWFwLCBpbWFnZUpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VKU09OID0gaW1hZ2VKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuICBcbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMuY29sb3VyUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlclByb2dyYW0gPSB0aGlzLnRleHR1cmVSZW5kZXJlci5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShjb2xvdXJSZW5kZXJlclByb2dyYW0pO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHRleHR1cmVSZW5kZXJlclByb2dyYW0pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKGNhbnZhcyk7XG4gICAgXG4gICAgY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVSZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtcyA9IFtdLFxuICAgICAgICAgIG1hc2tpbmcgPSBmYWxzZSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlSlNPTiwgY2FudmFzKTtcblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tpbmcpKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU1hcCwgaW1hZ2VKU09OIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlTWFwLCBpbWFnZUpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuIl19