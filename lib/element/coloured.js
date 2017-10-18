'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vertexUtilities = require('../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateVertexColourData = vertexUtilities.calculateVertexColourData;

var ColouredElement = function (_Element) {
  _inherits(ColouredElement, _Element);

  function ColouredElement(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData) {
    _classCallCheck(this, ColouredElement);

    var _this = _possibleConstructorReturn(this, (ColouredElement.__proto__ || Object.getPrototypeOf(ColouredElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColouredElement, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData() {
      return this.vertexPositionData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return this.vertexIndexData;
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return this.vertexNormalData;
    }
  }, {
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return this.vertexColourData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      colourRenderer.addVertexPositionData(this.vertexPositionData);
      colourRenderer.addVertexIndexData(this.vertexIndexData);
      colourRenderer.addVertexNormalData(this.vertexNormalData);
      colourRenderer.addVertexColourData(this.vertexColourData);
    }
  }], [{
    key: 'fromPropertiesAndInitialVertexPositionData',
    value: function fromPropertiesAndInitialVertexPositionData(Class, properties, initialVertexPositionData) {
      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          dimensions = properties.dimensions,
          position = properties.position,
          rotations = properties.rotations,
          transformations = properties.transformations,
          colour = properties.colour,
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          colouredElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData);


      return colouredElement;
    }
  }]);

  return ColouredElement;
}(Element);

module.exports = ColouredElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NvbG91cmVkLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwidmVydGV4VXRpbGl0aWVzIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSIsImNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSIsImNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEiLCJDb2xvdXJlZEVsZW1lbnQiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4Q29sb3VyRGF0YSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFZlcnRleENvbG91ckRhdGEiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsInRyYW5zZm9ybWF0aW9ucyIsImNvbG91ciIsImNvbG91cmVkRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLHFCQUFSLENBRHhCOztJQUdRRSwyQixHQUFnSEQsZSxDQUFoSEMsMkI7SUFBNkJDLHlCLEdBQW1GRixlLENBQW5GRSx5QjtJQUEyQkMsd0IsR0FBd0RILGUsQ0FBeERHLHdCO0lBQTBCQyx5QixHQUE4QkosZSxDQUE5QkkseUI7O0lBRXBGQyxlOzs7QUFDSiwyQkFBWUMsa0JBQVosRUFBZ0NDLGVBQWhDLEVBQWlEQyxnQkFBakQsRUFBbUVDLGdCQUFuRSxFQUFxRjtBQUFBOztBQUFBOztBQUduRixVQUFLSCxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQU5tRjtBQU9wRjs7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLSCxrQkFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0MsZ0JBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQjtBQUN0Q0QscUJBQWVFLHFCQUFmLENBQXFDLEtBQUtOLGtCQUExQztBQUNBSSxxQkFBZUcsa0JBQWYsQ0FBa0MsS0FBS04sZUFBdkM7QUFDQUcscUJBQWVJLG1CQUFmLENBQW1DLEtBQUtOLGdCQUF4QztBQUNBRSxxQkFBZUssbUJBQWYsQ0FBbUMsS0FBS04sZ0JBQXhDO0FBQ0Q7OzsrREFFaURPLEssRUFBT0MsVSxFQUFZQyx5QixFQUEyQjtBQUFBLFVBQ3RGQyxLQURzRixHQUNIRixVQURHLENBQ3RGRSxLQURzRjtBQUFBLFVBQy9FQyxNQUQrRSxHQUNISCxVQURHLENBQy9FRyxNQUQrRTtBQUFBLFVBQ3ZFQyxLQUR1RSxHQUNISixVQURHLENBQ3ZFSSxLQUR1RTtBQUFBLFVBQ2hFQyxVQURnRSxHQUNITCxVQURHLENBQ2hFSyxVQURnRTtBQUFBLFVBQ3BEQyxRQURvRCxHQUNITixVQURHLENBQ3BETSxRQURvRDtBQUFBLFVBQzFDQyxTQUQwQyxHQUNIUCxVQURHLENBQzFDTyxTQUQwQztBQUFBLFVBQy9CQyxlQUQrQixHQUNIUixVQURHLENBQy9CUSxlQUQrQjtBQUFBLFVBQ2RDLE1BRGMsR0FDSFQsVUFERyxDQUNkUyxNQURjO0FBQUEsVUFFeEZwQixrQkFGd0YsR0FFbkVMLDRCQUE0QmlCLHlCQUE1QixFQUF1REMsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsVUFBN0UsRUFBeUZDLFFBQXpGLEVBQW1HQyxTQUFuRyxFQUE4R0MsZUFBOUcsQ0FGbUU7QUFBQSxVQUd4RmxCLGVBSHdGLEdBR3RFSix5QkFBeUJlLHlCQUF6QixDQUhzRTtBQUFBLFVBSXhGVixnQkFKd0YsR0FJckVOLDBCQUEwQkksa0JBQTFCLENBSnFFO0FBQUEsVUFLeEZHLGdCQUx3RixHQUtyRUwsMEJBQTBCYyx5QkFBMUIsRUFBcURRLE1BQXJELENBTHFFO0FBQUEsVUFNeEZDLGVBTndGLEdBTXRFLElBQUlYLEtBQUosQ0FBVVYsa0JBQVYsRUFBOEJDLGVBQTlCLEVBQStDQyxnQkFBL0MsRUFBaUVDLGdCQUFqRSxDQU5zRTs7O0FBUTlGLGFBQU9rQixlQUFQO0FBQ0Q7Ozs7RUExQzJCN0IsTzs7QUE2QzlCOEIsT0FBT0MsT0FBUCxHQUFpQnhCLGVBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSwgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSwgY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Q29sb3VyRGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4SW5kZXhEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodGhpcy52ZXJ0ZXhJbmRleERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbERhdGEodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJEYXRhKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKENsYXNzLCBwcm9wZXJ0aWVzLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zLCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgcm90YXRpb25zLCB0cmFuc2Zvcm1hdGlvbnMpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNvbG91ciksXG4gICAgICAgICAgY29sb3VyZWRFbGVtZW50ID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEVsZW1lbnQ7XG4iXX0=