'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube = require('../cube'),
    arrayUtilities = require('../../../utilities/array');

var flatten = arrayUtilities.flatten;
var _runtimeConfiguration = runtimeConfiguration,
    imageMapJSON = _runtimeConfiguration.imageMapJSON,
    textureNames = ['ivy.jpg', 'steel.jpg', 'grass.jpg', 'bricks.jpg', 'carpet.jpg', 'concrete.jpg'],
    textureCoordinates = textureNames.reduce(function (textureCoordinates, textureName) {
  textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

  return textureCoordinates;
}, []),
    textureCoordinateData = flatten(textureCoordinates);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3ViZS90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIkN1YmUiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmbGF0dGVuIiwicnVudGltZUNvbmZpZ3VyYXRpb24iLCJpbWFnZU1hcEpTT04iLCJ0ZXh0dXJlTmFtZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJyZWR1Y2UiLCJ0ZXh0dXJlTmFtZSIsImNvbmNhdCIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsIlRleHR1cmVDdWJlIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJnZXRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxEYXRhIiwiZ2V0VmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFZlcnRleEluZGV4RGF0YSIsImFkZFRleHR1cmVDb29yZGluYXRlRGF0YSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FEdkI7O0lBR1FFLE8sR0FBWUQsYyxDQUFaQyxPOzRCQUVpQkMsb0I7SUFBakJDLFkseUJBQUFBLFk7SUFDRkMsWSxHQUFlLENBQ2IsU0FEYSxFQUViLFdBRmEsRUFHYixXQUhhLEVBSWIsWUFKYSxFQUtiLFlBTGEsRUFNYixjQU5hLEM7SUFRZkMsa0IsR0FBcUJELGFBQWFFLE1BQWIsQ0FBb0IsVUFBU0Qsa0JBQVQsRUFBNkJFLFdBQTdCLEVBQTBDO0FBQ2pGRix1QkFBcUJBLG1CQUFtQkcsTUFBbkIsQ0FBMEJMLGFBQWFJLFdBQWIsQ0FBMUIsQ0FBckI7O0FBRUEsU0FBT0Ysa0JBQVA7QUFDRCxDQUpvQixFQUlsQixFQUprQixDO0lBS3JCSSxxQixHQUF3QlIsUUFBUUksa0JBQVIsQzs7SUFFeEJLLFc7OztBQUNKLHVCQUFZQyxrQkFBWixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxlQUFsRCxFQUFtRUoscUJBQW5FLEVBQTBGO0FBQUE7O0FBQUEsMEhBQ2xGRSxrQkFEa0YsRUFDOURDLGdCQUQ4RCxFQUM1Q0MsZUFENEM7O0FBR3hGLFVBQUtKLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFId0Y7QUFJekY7Ozs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0EscUJBQVo7QUFDRDs7O2tDQUVhSyxZLEVBQWNDLGEsRUFBZTtBQUN6QyxVQUFNSixxQkFBcUIsS0FBS0sscUJBQUwsRUFBM0I7QUFBQSxVQUNNSixtQkFBbUIsS0FBS0ssbUJBQUwsRUFEekI7QUFBQSxVQUVNSixrQkFBa0IsS0FBS0ssa0JBQUwsRUFGeEI7O0FBSUFILG9CQUFjSSxxQkFBZCxDQUFvQ1Isa0JBQXBDO0FBQ0FJLG9CQUFjSyxtQkFBZCxDQUFrQ1IsZ0JBQWxDO0FBQ0FHLG9CQUFjTSxrQkFBZCxDQUFpQ1IsZUFBakM7QUFDQUUsb0JBQWNPLHdCQUFkLENBQXVDLEtBQUtiLHFCQUE1QztBQUNEOzs7bUNBRXFCYyxVLEVBQVk7QUFBRSxhQUFPekIsS0FBSzBCLGNBQUwsQ0FBb0JkLFdBQXBCLEVBQWlDYSxVQUFqQyxFQUE2Q2QscUJBQTdDLENBQVA7QUFBNkU7Ozs7RUF0QnpGWCxJOztBQXlCMUIyQixPQUFPQyxPQUFQLEdBQWlCaEIsV0FBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ3ViZSA9IHJlcXVpcmUoJy4uL2N1YmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHsgaW1hZ2VNYXBKU09OIH0gPSBydW50aW1lQ29uZmlndXJhdGlvbixcbiAgICAgIHRleHR1cmVOYW1lcyA9IFtcbiAgICAgICAgJ2l2eS5qcGcnLFxuICAgICAgICAnc3RlZWwuanBnJyxcbiAgICAgICAgJ2dyYXNzLmpwZycsXG4gICAgICAgICdicmlja3MuanBnJyxcbiAgICAgICAgJ2NhcnBldC5qcGcnLFxuICAgICAgICAnY29uY3JldGUuanBnJ1xuICAgICAgXSxcbiAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVOYW1lcy5yZWR1Y2UoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzLCB0ZXh0dXJlTmFtZSkge1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuY29uY2F0KGltYWdlTWFwSlNPTlt0ZXh0dXJlTmFtZV0pO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICB9LCBbXSksXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBmbGF0dGVuKHRleHR1cmVDb29yZGluYXRlcyk7XG5cbmNsYXNzIFRleHR1cmVDdWJlIGV4dGVuZHMgQ3ViZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudChjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmdldFZlcnRleE5vcm1hbERhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmdldFZlcnRleEluZGV4RGF0YSgpO1xuXG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDdWJlLmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVDdWJlLCBwcm9wZXJ0aWVzLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN1YmU7XG4iXX0=