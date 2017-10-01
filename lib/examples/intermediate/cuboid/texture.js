'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube = require('../cuboid'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3Vib2lkL3RleHR1cmUuanMiXSwibmFtZXMiOlsiQ3ViZSIsInJlcXVpcmUiLCJpbWFnZU1hcFV0aWxpdGllcyIsInRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWUiLCJUZXh0dXJlQ3ViZSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUN1YmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxXQUFSLENBQWI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsNkJBQVIsQ0FEMUI7O0lBR1FFLGtDLEdBQXVDRCxpQixDQUF2Q0Msa0M7O0lBRUZDLFc7OztBQUNKLHVCQUFZQyxrQkFBWixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxlQUFsRCxFQUFtRUMscUJBQW5FLEVBQTBGO0FBQUE7O0FBQUEsMEhBQ2xGSCxrQkFEa0YsRUFDOURDLGdCQUQ4RCxFQUM1Q0MsZUFENEM7O0FBR3hGLFVBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFId0Y7QUFJekY7Ozs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0EscUJBQVo7QUFDRDs7OzJCQUVNQyxZLEVBQWNDLGEsRUFBZTtBQUNsQyxVQUFNTCxxQkFBcUIsS0FBS00scUJBQUwsRUFBM0I7QUFBQSxVQUNNTCxtQkFBbUIsS0FBS00sbUJBQUwsRUFEekI7QUFBQSxVQUVNTCxrQkFBa0IsS0FBS00sa0JBQUwsRUFGeEI7O0FBSUFILG9CQUFjSSxxQkFBZCxDQUFvQ1Qsa0JBQXBDO0FBQ0FLLG9CQUFjSyxtQkFBZCxDQUFrQ1QsZ0JBQWxDO0FBQ0FJLG9CQUFjTSxrQkFBZCxDQUFpQ1QsZUFBakM7QUFDQUcsb0JBQWNPLHdCQUFkLENBQXVDLEtBQUtULHFCQUE1QztBQUNEOzs7bUNBRXFCVSxVLEVBQVk7QUFDMUIsVUFBRUMsU0FBRixHQUFnQkQsVUFBaEIsQ0FBRUMsU0FBRjtBQUFBLFVBQ0FYLHFCQURBLEdBQ3dCTCxtQ0FBbUNnQixTQUFuQyxDQUR4QjtBQUFBLFVBRUFDLFdBRkEsR0FFY3BCLEtBQUtxQixjQUFMLENBQW9CakIsV0FBcEIsRUFBaUNjLFVBQWpDLEVBQTZDVixxQkFBN0MsQ0FGZDs7O0FBSU4sYUFBT1ksV0FBUDtBQUNEOzs7O0VBNUJ1QnBCLEk7O0FBK0IxQnNCLE9BQU9DLE9BQVAsR0FBaUJuQixXQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDdWJlID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWUgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlQ3ViZSBleHRlbmRzIEN1YmUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmdldFZlcnRleE5vcm1hbERhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmdldFZlcnRleEluZGV4RGF0YSgpO1xuXG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZShpbWFnZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVDdWJlID0gQ3ViZS5mcm9tUHJvcGVydGllcyhUZXh0dXJlQ3ViZSwgcHJvcGVydGllcywgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ3ViZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVDdWJlO1xuIl19