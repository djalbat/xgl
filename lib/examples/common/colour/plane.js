'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    ColourElement = require('../../../element/colour');

var initialVertexPositionData = plane.initialVertexPositionData;

var ColourPlane = function (_ColourElement) {
  _inherits(ColourPlane, _ColourElement);

  function ColourPlane() {
    _classCallCheck(this, ColourPlane);

    return _possibleConstructorReturn(this, (ColourPlane.__proto__ || Object.getPrototypeOf(ColourPlane)).apply(this, arguments));
  }

  _createClass(ColourPlane, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColourElement.fromPropertiesAndInitialVertexPositionData(ColourPlane, properties, initialVertexPositionData);
    }
  }]);

  return ColourPlane;
}(ColourElement);

module.exports = ColourPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyL3BsYW5lLmpzIl0sIm5hbWVzIjpbInBsYW5lIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiQ29sb3VyUGxhbmUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx5QkFBUixDQUR0Qjs7SUFHUUUseUIsR0FBOEJILEssQ0FBOUJHLHlCOztJQUVGQyxXOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9ILGNBQWNJLDBDQUFkLENBQXlERixXQUF6RCxFQUFzRUMsVUFBdEUsRUFBa0ZGLHlCQUFsRixDQUFQO0FBQXNIOzs7O0VBRGxJRCxhOztBQUkxQkssT0FBT0MsT0FBUCxHQUFpQkosV0FBakIiLCJmaWxlIjoicGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsYW5lID0gcmVxdWlyZSgnLi4vcGxhbmUnKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IHBsYW5lO1xuXG5jbGFzcyBDb2xvdXJQbGFuZSBleHRlbmRzIENvbG91ckVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ29sb3VyRWxlbWVudC5mcm9tUHJvcGVydGllc0FuZEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoQ29sb3VyUGxhbmUsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUGxhbmU7XG4iXX0=