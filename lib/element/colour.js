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

var ColourElement = function (_Element) {
  _inherits(ColourElement, _Element);

  function ColourElement(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData) {
    _classCallCheck(this, ColourElement);

    var _this = _possibleConstructorReturn(this, (ColourElement.__proto__ || Object.getPrototypeOf(ColourElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourElement, [{
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
          colourElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData);


      return colourElement;
    }
  }]);

  return ColourElement;
}(Element);

module.exports = ColourElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NvbG91ci5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwiQ29sb3VyRWxlbWVudCIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVmVydGV4Q29sb3VyRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicm90YXRpb25zIiwidHJhbnNmb3JtYXRpb25zIiwiY29sb3VyIiwiY29sb3VyRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLHFCQUFSLENBRHhCOztJQUdRRSwyQixHQUFnSEQsZSxDQUFoSEMsMkI7SUFBNkJDLHlCLEdBQW1GRixlLENBQW5GRSx5QjtJQUEyQkMsd0IsR0FBd0RILGUsQ0FBeERHLHdCO0lBQTBCQyx5QixHQUE4QkosZSxDQUE5QkkseUI7O0lBRXBGQyxhOzs7QUFDSix5QkFBWUMsa0JBQVosRUFBZ0NDLGVBQWhDLEVBQWlEQyxnQkFBakQsRUFBbUVDLGdCQUFuRSxFQUFxRjtBQUFBOztBQUFBOztBQUduRixVQUFLSCxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQU5tRjtBQU9wRjs7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLSCxrQkFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0MsZ0JBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQjtBQUN0Q0QscUJBQWVFLHFCQUFmLENBQXFDLEtBQUtOLGtCQUExQztBQUNBSSxxQkFBZUcsa0JBQWYsQ0FBa0MsS0FBS04sZUFBdkM7QUFDQUcscUJBQWVJLG1CQUFmLENBQW1DLEtBQUtOLGdCQUF4QztBQUNBRSxxQkFBZUssbUJBQWYsQ0FBbUMsS0FBS04sZ0JBQXhDO0FBQ0Q7OzsrREFFaURPLEssRUFBT0MsVSxFQUFZQyx5QixFQUEyQjtBQUFBLFVBQ3RGQyxLQURzRixHQUNIRixVQURHLENBQ3RGRSxLQURzRjtBQUFBLFVBQy9FQyxNQUQrRSxHQUNISCxVQURHLENBQy9FRyxNQUQrRTtBQUFBLFVBQ3ZFQyxLQUR1RSxHQUNISixVQURHLENBQ3ZFSSxLQUR1RTtBQUFBLFVBQ2hFQyxVQURnRSxHQUNITCxVQURHLENBQ2hFSyxVQURnRTtBQUFBLFVBQ3BEQyxRQURvRCxHQUNITixVQURHLENBQ3BETSxRQURvRDtBQUFBLFVBQzFDQyxTQUQwQyxHQUNIUCxVQURHLENBQzFDTyxTQUQwQztBQUFBLFVBQy9CQyxlQUQrQixHQUNIUixVQURHLENBQy9CUSxlQUQrQjtBQUFBLFVBQ2RDLE1BRGMsR0FDSFQsVUFERyxDQUNkUyxNQURjO0FBQUEsVUFFeEZwQixrQkFGd0YsR0FFbkVMLDRCQUE0QmlCLHlCQUE1QixFQUF1REMsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsVUFBN0UsRUFBeUZDLFFBQXpGLEVBQW1HQyxTQUFuRyxFQUE4R0MsZUFBOUcsQ0FGbUU7QUFBQSxVQUd4RmxCLGVBSHdGLEdBR3RFSix5QkFBeUJlLHlCQUF6QixDQUhzRTtBQUFBLFVBSXhGVixnQkFKd0YsR0FJckVOLDBCQUEwQkksa0JBQTFCLENBSnFFO0FBQUEsVUFLeEZHLGdCQUx3RixHQUtyRUwsMEJBQTBCYyx5QkFBMUIsRUFBcURRLE1BQXJELENBTHFFO0FBQUEsVUFNeEZDLGFBTndGLEdBTXhFLElBQUlYLEtBQUosQ0FBVVYsa0JBQVYsRUFBOEJDLGVBQTlCLEVBQStDQyxnQkFBL0MsRUFBaUVDLGdCQUFqRSxDQU53RTs7O0FBUTlGLGFBQU9rQixhQUFQO0FBQ0Q7Ozs7RUExQ3lCN0IsTzs7QUE2QzVCOEIsT0FBT0MsT0FBUCxHQUFpQnhCLGFBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSwgY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudmVydGV4UG9zaXRpb25EYXRhID0gdmVydGV4UG9zaXRpb25EYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsRGF0YSA9IHZlcnRleE5vcm1hbERhdGE7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4RGF0YSh0aGlzLnZlcnRleEluZGV4RGF0YSk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91ckRhdGEodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllc0FuZEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoQ2xhc3MsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgcm90YXRpb25zLCB0cmFuc2Zvcm1hdGlvbnMsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucyksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSxcbiAgICAgICAgICBjb2xvdXJFbGVtZW50ID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyRWxlbWVudDtcbiJdfQ==