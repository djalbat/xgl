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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZS9jdWJvaWQuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIlRleHR1cmVFbGVtZW50IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIlRleHR1cmVDdWJvaWQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2Qjs7SUFHUUUseUIsR0FBOEJILE0sQ0FBOUJHLHlCOztJQUVGQyxhOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9ILGVBQWVJLDBDQUFmLENBQTBERixhQUExRCxFQUF5RUMsVUFBekUsRUFBcUZGLHlCQUFyRixDQUFQO0FBQXlIOzs7O0VBRG5JRCxjOztBQUk1QkssT0FBT0MsT0FBUCxHQUFpQkosYUFBakIiLCJmaWxlIjoiY3Vib2lkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3Vib2lkO1xuXG5jbGFzcyBUZXh0dXJlQ3Vib2lkIGV4dGVuZHMgVGV4dHVyZUVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gVGV4dHVyZUVsZW1lbnQuZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKFRleHR1cmVDdWJvaWQsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN1Ym9pZDtcbiJdfQ==