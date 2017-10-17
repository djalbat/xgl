'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColourElement = require('../../../element/colour');

var initialVertexPositionData = cuboid.initialVertexPositionData;

var ColourCuboid = function (_ColourElement) {
  _inherits(ColourCuboid, _ColourElement);

  function ColourCuboid() {
    _classCallCheck(this, ColourCuboid);

    return _possibleConstructorReturn(this, (ColourCuboid.__proto__ || Object.getPrototypeOf(ColourCuboid)).apply(this, arguments));
  }

  _createClass(ColourCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColourElement.fromPropertiesAndInitialVertexPositionData(ColourCuboid, properties, initialVertexPositionData);
    }
  }]);

  return ColourCuboid;
}(ColourElement);

module.exports = ColourCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyL2N1Ym9pZC5qcyJdLCJuYW1lcyI6WyJjdWJvaWQiLCJyZXF1aXJlIiwiQ29sb3VyRWxlbWVudCIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJDdWJvaWQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx5QkFBUixDQUR0Qjs7SUFHUUUseUIsR0FBOEJILE0sQ0FBOUJHLHlCOztJQUVGQyxZOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9ILGNBQWNJLDBDQUFkLENBQXlERixZQUF6RCxFQUF1RUMsVUFBdkUsRUFBbUZGLHlCQUFuRixDQUFQO0FBQXVIOzs7O0VBRGxJRCxhOztBQUkzQkssT0FBT0MsT0FBUCxHQUFpQkosWUFBakIiLCJmaWxlIjoiY3Vib2lkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN1Ym9pZDtcblxuY2xhc3MgQ29sb3VyQ3Vib2lkIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDb2xvdXJFbGVtZW50LmZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YShDb2xvdXJDdWJvaWQsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyQ3Vib2lkO1xuIl19