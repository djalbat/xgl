'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    ColouredElement = require('../../../element/coloured');

var initialVertexPositionData = plane.initialVertexPositionData;

var ColouredPlane = function (_ColouredElement) {
  _inherits(ColouredPlane, _ColouredElement);

  function ColouredPlane() {
    _classCallCheck(this, ColouredPlane);

    return _possibleConstructorReturn(this, (ColouredPlane.__proto__ || Object.getPrototypeOf(ColouredPlane)).apply(this, arguments));
  }

  _createClass(ColouredPlane, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredElement.fromPropertiesAndInitialVertexPositionData(ColouredPlane, properties, initialVertexPositionData);
    }
  }]);

  return ColouredPlane;
}(ColouredElement);

module.exports = ColouredPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvcGxhbmUuanMiXSwibmFtZXMiOlsicGxhbmUiLCJyZXF1aXJlIiwiQ29sb3VyZWRFbGVtZW50IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIkNvbG91cmVkUGxhbmUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwyQkFBUixDQUR4Qjs7SUFHUUUseUIsR0FBOEJILEssQ0FBOUJHLHlCOztJQUVGQyxhOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9ILGdCQUFnQkksMENBQWhCLENBQTJERixhQUEzRCxFQUEwRUMsVUFBMUUsRUFBc0ZGLHlCQUF0RixDQUFQO0FBQTBIOzs7O0VBRHBJRCxlOztBQUk1QkssT0FBT0MsT0FBUCxHQUFpQkosYUFBakIiLCJmaWxlIjoicGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsYW5lID0gcmVxdWlyZSgnLi4vcGxhbmUnKSxcbiAgICAgIENvbG91cmVkRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY29sb3VyZWQnKTtcblxuY29uc3QgeyBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBwbGFuZTtcblxuY2xhc3MgQ29sb3VyZWRQbGFuZSBleHRlbmRzIENvbG91cmVkRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDb2xvdXJlZEVsZW1lbnQuZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKENvbG91cmVkUGxhbmUsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRQbGFuZTtcbiJdfQ==