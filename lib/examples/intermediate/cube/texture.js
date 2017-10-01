'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube = require('../cube'),
    imageMapUtilities = require('../../../utilities/imageMap');

var textureCoordinateDataFromImageNames = imageMapUtilities.textureCoordinateDataFromImageNames;


var imageNames = ['ivy.jpg', 'steel.jpg', 'grass.jpg', 'bricks.jpg', 'carpet.jpg', 'concrete.jpg'],
    textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);

var TextureCube = function (_Cube) {
  _inherits(TextureCube, _Cube);

  function TextureCube(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    _classCallCheck(this, TextureCube);

    var _this = _possibleConstructorReturn(this, (TextureCube.__proto__ || Object.getPrototypeOf(TextureCube)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureCube, [{
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'createElement',
    value: function createElement(colourShader, textureShader) {
      var vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();

      textureShader.addVertexPositionData(vertexPositionData);
      textureShader.addVertexNormalData(vertexNormalData);
      textureShader.addVertexIndexData(vertexIndexData);
      textureShader.addTextureCoordinateData(this.textureCoordinateData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Cube.fromProperties(TextureCube, properties, textureCoordinateData);
    }
  }]);

  return TextureCube;
}(Cube);

module.exports = TextureCube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3ViZS90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIkN1YmUiLCJyZXF1aXJlIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyIsImltYWdlTmFtZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJUZXh0dXJlQ3ViZSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLDZCQUFSLENBRDFCOztJQUdRRSxtQyxHQUF3Q0QsaUIsQ0FBeENDLG1DOzs7QUFFUixJQUFNQyxhQUFhLENBQ1gsU0FEVyxFQUVYLFdBRlcsRUFHWCxXQUhXLEVBSVgsWUFKVyxFQUtYLFlBTFcsRUFNWCxjQU5XLENBQW5CO0FBQUEsSUFRTUMsd0JBQXdCRixvQ0FBb0NDLFVBQXBDLENBUjlCOztJQVVNRSxXOzs7QUFDSix1QkFBWUMsa0JBQVosRUFBZ0NDLGdCQUFoQyxFQUFrREMsZUFBbEQsRUFBbUVKLHFCQUFuRSxFQUEwRjtBQUFBOztBQUFBLDBIQUNsRkUsa0JBRGtGLEVBQzlEQyxnQkFEOEQsRUFDNUNDLGVBRDRDOztBQUd4RixVQUFLSixxQkFBTCxHQUE2QkEscUJBQTdCO0FBSHdGO0FBSXpGOzs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtBLHFCQUFaO0FBQ0Q7OztrQ0FFYUssWSxFQUFjQyxhLEVBQWU7QUFDekMsVUFBTUoscUJBQXFCLEtBQUtLLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUosbUJBQW1CLEtBQUtLLG1CQUFMLEVBRHpCO0FBQUEsVUFFTUosa0JBQWtCLEtBQUtLLGtCQUFMLEVBRnhCOztBQUlBSCxvQkFBY0kscUJBQWQsQ0FBb0NSLGtCQUFwQztBQUNBSSxvQkFBY0ssbUJBQWQsQ0FBa0NSLGdCQUFsQztBQUNBRyxvQkFBY00sa0JBQWQsQ0FBaUNSLGVBQWpDO0FBQ0FFLG9CQUFjTyx3QkFBZCxDQUF1QyxLQUFLYixxQkFBNUM7QUFDRDs7O21DQUVxQmMsVSxFQUFZO0FBQUUsYUFBT25CLEtBQUtvQixjQUFMLENBQW9CZCxXQUFwQixFQUFpQ2EsVUFBakMsRUFBNkNkLHFCQUE3QyxDQUFQO0FBQTZFOzs7O0VBdEJ6RkwsSTs7QUF5QjFCcUIsT0FBT0MsT0FBUCxHQUFpQmhCLFdBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKCcuLi9jdWJlJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgaW1hZ2VOYW1lcyA9IFtcbiAgICAgICAgJ2l2eS5qcGcnLFxuICAgICAgICAnc3RlZWwuanBnJyxcbiAgICAgICAgJ2dyYXNzLmpwZycsXG4gICAgICAgICdicmlja3MuanBnJyxcbiAgICAgICAgJ2NhcnBldC5qcGcnLFxuICAgICAgICAnY29uY3JldGUuanBnJ1xuICAgICAgXSxcbiAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpO1xuXG5jbGFzcyBUZXh0dXJlQ3ViZSBleHRlbmRzIEN1YmUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gdGhpcy5nZXRWZXJ0ZXhJbmRleERhdGEoKTtcblxuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSk7XG4gICAgdGV4dHVyZVNoYWRlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ3ViZS5mcm9tUHJvcGVydGllcyhUZXh0dXJlQ3ViZSwgcHJvcGVydGllcywgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVDdWJlO1xuXG4iXX0=