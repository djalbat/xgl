'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TextureElement = require('../../../element/texture');

var initialVertexPositionData = cuboid.initialVertexPositionData;

var TextureCuboid = function (_TextureElement) {
  _inherits(TextureCuboid, _TextureElement);

  function TextureCuboid() {
    _classCallCheck(this, TextureCuboid);

    return _possibleConstructorReturn(this, (TextureCuboid.__proto__ || Object.getPrototypeOf(TextureCuboid)).apply(this, arguments));
  }

  _createClass(TextureCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TextureElement.fromPropertiesAndInitialVertexPositionData(TextureCuboid, properties, initialVertexPositionData);
    }
  }]);

  return TextureCuboid;
}(TextureElement);

module.exports = TextureCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL2N1Ym9pZC5qcyJdLCJuYW1lcyI6WyJjdWJvaWQiLCJyZXF1aXJlIiwiVGV4dHVyZUVsZW1lbnQiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZUN1Ym9pZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllc0FuZEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCOztJQUdRRSx5QixHQUE4QkgsTSxDQUE5QkcseUI7O0lBRUZDLGE7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUUsYUFBT0gsZUFBZUksMENBQWYsQ0FBMERGLGFBQTFELEVBQXlFQyxVQUF6RSxFQUFxRkYseUJBQXJGLENBQVA7QUFBeUg7Ozs7RUFEbklELGM7O0FBSTVCSyxPQUFPQyxPQUFQLEdBQWlCSixhQUFqQiIsImZpbGUiOiJjdWJvaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgVGV4dHVyZUVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L3RleHR1cmUnKTtcblxuY29uc3QgeyBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIFRleHR1cmVDdWJvaWQgZXh0ZW5kcyBUZXh0dXJlRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBUZXh0dXJlRWxlbWVudC5mcm9tUHJvcGVydGllc0FuZEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoVGV4dHVyZUN1Ym9pZCwgcHJvcGVydGllcywgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQ3Vib2lkO1xuIl19