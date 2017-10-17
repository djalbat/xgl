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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL3RleHR1cmUuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIlRleHR1cmVFbGVtZW50IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIlRleHR1cmVDdWJvaWQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2Qjs7SUFHUUUseUIsR0FBOEJILE0sQ0FBOUJHLHlCOztJQUVGQyxhOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9ILGVBQWVJLDBDQUFmLENBQTBERixhQUExRCxFQUF5RUMsVUFBekUsRUFBcUZGLHlCQUFyRixDQUFQO0FBQXlIOzs7O0VBRG5JRCxjOztBQUk1QkssT0FBT0MsT0FBUCxHQUFpQkosYUFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vib2lkID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBUZXh0dXJlRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvdGV4dHVyZScpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN1Ym9pZDtcblxuY2xhc3MgVGV4dHVyZUN1Ym9pZCBleHRlbmRzIFRleHR1cmVFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFRleHR1cmVFbGVtZW50LmZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YShUZXh0dXJlQ3Vib2lkLCBwcm9wZXJ0aWVzLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVDdWJvaWQ7XG4iXX0=