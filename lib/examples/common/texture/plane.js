'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TextureElement = require('../../../element/texture');

var initialVertexPositionData = plane.initialVertexPositionData;

var TexturePlane = function (_TextureElement) {
  _inherits(TexturePlane, _TextureElement);

  function TexturePlane() {
    _classCallCheck(this, TexturePlane);

    return _possibleConstructorReturn(this, (TexturePlane.__proto__ || Object.getPrototypeOf(TexturePlane)).apply(this, arguments));
  }

  _createClass(TexturePlane, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TextureElement.fromPropertiesAndInitialVertexPositionData(TexturePlane, properties, initialVertexPositionData);
    }
  }]);

  return TexturePlane;
}(TextureElement);

module.exports = TexturePlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZS9wbGFuZS5qcyJdLCJuYW1lcyI6WyJwbGFuZSIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJUZXh0dXJlUGxhbmUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2Qjs7SUFHUUUseUIsR0FBOEJILEssQ0FBOUJHLHlCOztJQUVGQyxZOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9ILGVBQWVJLDBDQUFmLENBQTBERixZQUExRCxFQUF3RUMsVUFBeEUsRUFBb0ZGLHlCQUFwRixDQUFQO0FBQXdIOzs7O0VBRG5JRCxjOztBQUkzQkssT0FBT0MsT0FBUCxHQUFpQkosWUFBakIiLCJmaWxlIjoicGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsYW5lID0gcmVxdWlyZSgnLi4vcGxhbmUnKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gcGxhbmU7XG5cbmNsYXNzIFRleHR1cmVQbGFuZSBleHRlbmRzIFRleHR1cmVFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFRleHR1cmVFbGVtZW50LmZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YShUZXh0dXJlUGxhbmUsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVBsYW5lO1xuIl19