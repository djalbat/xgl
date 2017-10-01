'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube = require('../cube'),
    imageMap = require('../../../imageMap');

var textureCoordinateDataFromImageNames = imageMap.textureCoordinateDataFromImageNames;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3ViZS90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIkN1YmUiLCJyZXF1aXJlIiwiaW1hZ2VNYXAiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyIsImltYWdlTmFtZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJUZXh0dXJlQ3ViZSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxtQkFBUixDQURqQjs7SUFHUUUsbUMsR0FBd0NELFEsQ0FBeENDLG1DOzs7QUFFUixJQUFNQyxhQUFhLENBQ1gsU0FEVyxFQUVYLFdBRlcsRUFHWCxXQUhXLEVBSVgsWUFKVyxFQUtYLFlBTFcsRUFNWCxjQU5XLENBQW5CO0FBQUEsSUFRTUMsd0JBQXdCRixvQ0FBb0NDLFVBQXBDLENBUjlCOztJQVVNRSxXOzs7QUFDSix1QkFBWUMsa0JBQVosRUFBZ0NDLGdCQUFoQyxFQUFrREMsZUFBbEQsRUFBbUVKLHFCQUFuRSxFQUEwRjtBQUFBOztBQUFBLDBIQUNsRkUsa0JBRGtGLEVBQzlEQyxnQkFEOEQsRUFDNUNDLGVBRDRDOztBQUd4RixVQUFLSixxQkFBTCxHQUE2QkEscUJBQTdCO0FBSHdGO0FBSXpGOzs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtBLHFCQUFaO0FBQ0Q7OztrQ0FFYUssWSxFQUFjQyxhLEVBQWU7QUFDekMsVUFBTUoscUJBQXFCLEtBQUtLLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUosbUJBQW1CLEtBQUtLLG1CQUFMLEVBRHpCO0FBQUEsVUFFTUosa0JBQWtCLEtBQUtLLGtCQUFMLEVBRnhCOztBQUlBSCxvQkFBY0kscUJBQWQsQ0FBb0NSLGtCQUFwQztBQUNBSSxvQkFBY0ssbUJBQWQsQ0FBa0NSLGdCQUFsQztBQUNBRyxvQkFBY00sa0JBQWQsQ0FBaUNSLGVBQWpDO0FBQ0FFLG9CQUFjTyx3QkFBZCxDQUF1QyxLQUFLYixxQkFBNUM7QUFDRDs7O21DQUVxQmMsVSxFQUFZO0FBQUUsYUFBT25CLEtBQUtvQixjQUFMLENBQW9CZCxXQUFwQixFQUFpQ2EsVUFBakMsRUFBNkNkLHFCQUE3QyxDQUFQO0FBQTZFOzs7O0VBdEJ6RkwsSTs7QUF5QjFCcUIsT0FBT0MsT0FBUCxHQUFpQmhCLFdBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKCcuLi9jdWJlJyksXG4gICAgICBpbWFnZU1hcCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXMgfSA9IGltYWdlTWFwO1xuXG5jb25zdCBpbWFnZU5hbWVzID0gW1xuICAgICAgICAnaXZ5LmpwZycsXG4gICAgICAgICdzdGVlbC5qcGcnLFxuICAgICAgICAnZ3Jhc3MuanBnJyxcbiAgICAgICAgJ2JyaWNrcy5qcGcnLFxuICAgICAgICAnY2FycGV0LmpwZycsXG4gICAgICAgICdjb25jcmV0ZS5qcGcnXG4gICAgICBdLFxuICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcyk7XG5cbmNsYXNzIFRleHR1cmVDdWJlIGV4dGVuZHMgQ3ViZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudChjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmdldFZlcnRleE5vcm1hbERhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmdldFZlcnRleEluZGV4RGF0YSgpO1xuXG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDdWJlLmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVDdWJlLCBwcm9wZXJ0aWVzLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN1YmU7XG5cbiJdfQ==