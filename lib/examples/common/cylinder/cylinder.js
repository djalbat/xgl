'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    TextureElement = require('../../../element/texture');

var initialVertexPositionData = cylinder.initialVertexPositionData;

var TextureCylinder = function (_TextureElement) {
  _inherits(TextureCylinder, _TextureElement);

  function TextureCylinder() {
    _classCallCheck(this, TextureCylinder);

    return _possibleConstructorReturn(this, (TextureCylinder.__proto__ || Object.getPrototypeOf(TextureCylinder)).apply(this, arguments));
  }

  _createClass(TextureCylinder, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TextureElement.fromPropertiesAndInitialVertexPositionData(TextureCylinder, properties, initialVertexPositionData);
    }
  }]);

  return TextureCylinder;
}(TextureElement);

module.exports = TextureCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY3lsaW5kZXIuanMiXSwibmFtZXMiOlsiY3lsaW5kZXIiLCJyZXF1aXJlIiwiVGV4dHVyZUVsZW1lbnQiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZUN5bGluZGVyIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCOztJQUdRRSx5QixHQUE4QkgsUSxDQUE5QkcseUI7O0lBRUZDLGU7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUUsYUFBT0gsZUFBZUksMENBQWYsQ0FBMERGLGVBQTFELEVBQTJFQyxVQUEzRSxFQUF1RkYseUJBQXZGLENBQVA7QUFBMkg7Ozs7RUFEbklELGM7O0FBSTlCSyxPQUFPQyxPQUFQLEdBQWlCSixlQUFqQiIsImZpbGUiOiJjeWxpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpLFxuICAgICAgVGV4dHVyZUVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L3RleHR1cmUnKTtcblxuY29uc3QgeyBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjeWxpbmRlcjtcblxuY2xhc3MgVGV4dHVyZUN5bGluZGVyIGV4dGVuZHMgVGV4dHVyZUVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gVGV4dHVyZUVsZW1lbnQuZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKFRleHR1cmVDeWxpbmRlciwgcHJvcGVydGllcywgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQ3lsaW5kZXI7XG4iXX0=