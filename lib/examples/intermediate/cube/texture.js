'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube = require('../cube'),
    imageMapUtilities = require('../../../utilities/imageMap');

var textureCoordinateDataFromImageName = imageMapUtilities.textureCoordinateDataFromImageName;

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
    key: 'create',
    value: function create(colourShader, textureShader) {
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
      var imageName = properties.imageName,
          textureCoordinateData = textureCoordinateDataFromImageName(imageName),
          textureCube = Cube.fromProperties(TextureCube, properties, textureCoordinateData);


      return textureCube;
    }
  }]);

  return TextureCube;
}(Cube);

module.exports = TextureCube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3ViZS90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIkN1YmUiLCJyZXF1aXJlIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lIiwiVGV4dHVyZUN1YmUiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiY29sb3VyU2hhZGVyIiwidGV4dHVyZVNoYWRlciIsImdldFZlcnRleFBvc2l0aW9uRGF0YSIsImdldFZlcnRleE5vcm1hbERhdGEiLCJnZXRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwicHJvcGVydGllcyIsImltYWdlTmFtZSIsInRleHR1cmVDdWJlIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLDZCQUFSLENBRDFCOztJQUdRRSxrQyxHQUF1Q0QsaUIsQ0FBdkNDLGtDOztJQUVGQyxXOzs7QUFDSix1QkFBWUMsa0JBQVosRUFBZ0NDLGdCQUFoQyxFQUFrREMsZUFBbEQsRUFBbUVDLHFCQUFuRSxFQUEwRjtBQUFBOztBQUFBLDBIQUNsRkgsa0JBRGtGLEVBQzlEQyxnQkFEOEQsRUFDNUNDLGVBRDRDOztBQUd4RixVQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBSHdGO0FBSXpGOzs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtBLHFCQUFaO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxhLEVBQWU7QUFDbEMsVUFBTUwscUJBQXFCLEtBQUtNLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUwsbUJBQW1CLEtBQUtNLG1CQUFMLEVBRHpCO0FBQUEsVUFFTUwsa0JBQWtCLEtBQUtNLGtCQUFMLEVBRnhCOztBQUlBSCxvQkFBY0kscUJBQWQsQ0FBb0NULGtCQUFwQztBQUNBSyxvQkFBY0ssbUJBQWQsQ0FBa0NULGdCQUFsQztBQUNBSSxvQkFBY00sa0JBQWQsQ0FBaUNULGVBQWpDO0FBQ0FHLG9CQUFjTyx3QkFBZCxDQUF1QyxLQUFLVCxxQkFBNUM7QUFDRDs7O21DQUVxQlUsVSxFQUFZO0FBQzFCLFVBQUVDLFNBQUYsR0FBZ0JELFVBQWhCLENBQUVDLFNBQUY7QUFBQSxVQUNBWCxxQkFEQSxHQUN3QkwsbUNBQW1DZ0IsU0FBbkMsQ0FEeEI7QUFBQSxVQUVBQyxXQUZBLEdBRWNwQixLQUFLcUIsY0FBTCxDQUFvQmpCLFdBQXBCLEVBQWlDYyxVQUFqQyxFQUE2Q1YscUJBQTdDLENBRmQ7OztBQUlOLGFBQU9ZLFdBQVA7QUFDRDs7OztFQTVCdUJwQixJOztBQStCMUJzQixPQUFPQyxPQUFQLEdBQWlCbkIsV0FBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ3ViZSA9IHJlcXVpcmUoJy4uL2N1YmUnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZSB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVDdWJlIGV4dGVuZHMgQ3ViZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lKGltYWdlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUN1YmUgPSBDdWJlLmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVDdWJlLCBwcm9wZXJ0aWVzLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDdWJlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN1YmU7XG4iXX0=