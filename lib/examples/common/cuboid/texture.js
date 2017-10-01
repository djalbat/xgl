'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cuboid = require('../cuboid'),
    imageMapUtilities = require('../../../utilities/imageMap');

var textureCoordinateDataFromImageName = imageMapUtilities.textureCoordinateDataFromImageName;

var TextureCuboid = function (_Cuboid) {
  _inherits(TextureCuboid, _Cuboid);

  function TextureCuboid(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    _classCallCheck(this, TextureCuboid);

    var _this = _possibleConstructorReturn(this, (TextureCuboid.__proto__ || Object.getPrototypeOf(TextureCuboid)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureCuboid, [{
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
          textureCuboid = Cuboid.fromProperties(TextureCuboid, properties, textureCoordinateData);


      return textureCuboid;
    }
  }]);

  return TextureCuboid;
}(Cuboid);

module.exports = TextureCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL3RleHR1cmUuanMiXSwibmFtZXMiOlsiQ3Vib2lkIiwicmVxdWlyZSIsImltYWdlTWFwVXRpbGl0aWVzIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZSIsIlRleHR1cmVDdWJvaWQiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiY29sb3VyU2hhZGVyIiwidGV4dHVyZVNoYWRlciIsImdldFZlcnRleFBvc2l0aW9uRGF0YSIsImdldFZlcnRleE5vcm1hbERhdGEiLCJnZXRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwicHJvcGVydGllcyIsImltYWdlTmFtZSIsInRleHR1cmVDdWJvaWQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsNkJBQVIsQ0FEMUI7O0lBR1FFLGtDLEdBQXVDRCxpQixDQUF2Q0Msa0M7O0lBRUZDLGE7OztBQUNKLHlCQUFZQyxrQkFBWixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxlQUFsRCxFQUFtRUMscUJBQW5FLEVBQTBGO0FBQUE7O0FBQUEsOEhBQ2xGSCxrQkFEa0YsRUFDOURDLGdCQUQ4RCxFQUM1Q0MsZUFENEM7O0FBR3hGLFVBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFId0Y7QUFJekY7Ozs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0EscUJBQVo7QUFDRDs7OzJCQUVNQyxZLEVBQWNDLGEsRUFBZTtBQUNsQyxVQUFNTCxxQkFBcUIsS0FBS00scUJBQUwsRUFBM0I7QUFBQSxVQUNNTCxtQkFBbUIsS0FBS00sbUJBQUwsRUFEekI7QUFBQSxVQUVNTCxrQkFBa0IsS0FBS00sa0JBQUwsRUFGeEI7O0FBSUFILG9CQUFjSSxxQkFBZCxDQUFvQ1Qsa0JBQXBDO0FBQ0FLLG9CQUFjSyxtQkFBZCxDQUFrQ1QsZ0JBQWxDO0FBQ0FJLG9CQUFjTSxrQkFBZCxDQUFpQ1QsZUFBakM7QUFDQUcsb0JBQWNPLHdCQUFkLENBQXVDLEtBQUtULHFCQUE1QztBQUNEOzs7bUNBRXFCVSxVLEVBQVk7QUFDMUIsVUFBRUMsU0FBRixHQUFnQkQsVUFBaEIsQ0FBRUMsU0FBRjtBQUFBLFVBQ0FYLHFCQURBLEdBQ3dCTCxtQ0FBbUNnQixTQUFuQyxDQUR4QjtBQUFBLFVBRUFDLGFBRkEsR0FFZ0JwQixPQUFPcUIsY0FBUCxDQUFzQmpCLGFBQXRCLEVBQXFDYyxVQUFyQyxFQUFpRFYscUJBQWpELENBRmhCOzs7QUFJTixhQUFPWSxhQUFQO0FBQ0Q7Ozs7RUE1QnlCcEIsTTs7QUErQjVCc0IsT0FBT0MsT0FBUCxHQUFpQm5CLGFBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZUN1Ym9pZCBleHRlbmRzIEN1Ym9pZCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lKGltYWdlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUN1Ym9pZCA9IEN1Ym9pZC5mcm9tUHJvcGVydGllcyhUZXh0dXJlQ3Vib2lkLCBwcm9wZXJ0aWVzLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQ3Vib2lkO1xuIl19