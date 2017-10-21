'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredCanvasElement = require('../../../element/canvas/coloured');

var initialVertexPositionData = [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.0, 2.0, 0.0, 1.0, 3.0, 0.0, 1.0, 3.0, 1.0, 1.0, 2.0, 1.0, 1.0, 3.0, 0.0, 1.0, 4.0, 0.0, 0.0, 4.0, 1.0, 0.0, 3.0, 1.0, 1.0, 4.0, 0.0, 0.0, 5.0, 0.0, 0.0, 5.0, 1.0, 0.0, 4.0, 1.0, 0.0];

var ColouredPlane = function (_ColouredCanvasElemen) {
  _inherits(ColouredPlane, _ColouredCanvasElemen);

  function ColouredPlane() {
    _classCallCheck(this, ColouredPlane);

    return _possibleConstructorReturn(this, (ColouredPlane.__proto__ || Object.getPrototypeOf(ColouredPlane)).apply(this, arguments));
  }

  _createClass(ColouredPlane, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredPlane, properties);
    }
  }]);

  return ColouredPlane;
}(ColouredCanvasElement);

module.exports = ColouredPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvc2lkZXdhbGwvcGxhbmUuanMiXSwibmFtZXMiOlsiQ29sb3VyZWRDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJlZFBsYW5lIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx3QkFBd0JDLFFBQVEsa0NBQVIsQ0FBOUI7O0FBRUEsSUFBTUMsNEJBQTRCLENBRWhDLEdBRmdDLEVBRTNCLEdBRjJCLEVBRXRCLEdBRnNCLEVBR2hDLEdBSGdDLEVBRzNCLEdBSDJCLEVBR3RCLEdBSHNCLEVBSWhDLEdBSmdDLEVBSTNCLEdBSjJCLEVBSXRCLEdBSnNCLEVBS2hDLEdBTGdDLEVBSzNCLEdBTDJCLEVBS3RCLEdBTHNCLEVBT2hDLEdBUGdDLEVBTzNCLEdBUDJCLEVBT3RCLEdBUHNCLEVBUWhDLEdBUmdDLEVBUTNCLEdBUjJCLEVBUXRCLEdBUnNCLEVBU2hDLEdBVGdDLEVBUzNCLEdBVDJCLEVBU3RCLEdBVHNCLEVBVWhDLEdBVmdDLEVBVTNCLEdBVjJCLEVBVXRCLEdBVnNCLEVBWWhDLEdBWmdDLEVBWTNCLEdBWjJCLEVBWXRCLEdBWnNCLEVBYWhDLEdBYmdDLEVBYTNCLEdBYjJCLEVBYXRCLEdBYnNCLEVBY2hDLEdBZGdDLEVBYzNCLEdBZDJCLEVBY3RCLEdBZHNCLEVBZWhDLEdBZmdDLEVBZTNCLEdBZjJCLEVBZXRCLEdBZnNCLEVBaUJoQyxHQWpCZ0MsRUFpQjNCLEdBakIyQixFQWlCdEIsR0FqQnNCLEVBa0JoQyxHQWxCZ0MsRUFrQjNCLEdBbEIyQixFQWtCdEIsR0FsQnNCLEVBbUJoQyxHQW5CZ0MsRUFtQjNCLEdBbkIyQixFQW1CdEIsR0FuQnNCLEVBb0JoQyxHQXBCZ0MsRUFvQjNCLEdBcEIyQixFQW9CdEIsR0FwQnNCLEVBc0JoQyxHQXRCZ0MsRUFzQjNCLEdBdEIyQixFQXNCdEIsR0F0QnNCLEVBdUJoQyxHQXZCZ0MsRUF1QjNCLEdBdkIyQixFQXVCdEIsR0F2QnNCLEVBd0JoQyxHQXhCZ0MsRUF3QjNCLEdBeEIyQixFQXdCdEIsR0F4QnNCLEVBeUJoQyxHQXpCZ0MsRUF5QjNCLEdBekIyQixFQXlCdEIsR0F6QnNCLENBQWxDOztJQTZCTUMsYTs7Ozs7Ozs7Ozs7bURBQzJCO0FBQzdCLGFBQU9ELHlCQUFQO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9KLHNCQUFzQkssY0FBdEIsQ0FBcUNGLGFBQXJDLEVBQW9EQyxVQUFwRCxDQUFQO0FBQXlFOzs7O0VBTG5GSixxQjs7QUFRNUJNLE9BQU9DLE9BQVAsR0FBaUJKLGFBQWpCIiwiZmlsZSI6InBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhID0gW1xuXG4gIDAuMCwgMC4wLCAwLjAsXG4gIDEuMCwgMC4wLCAwLjAsXG4gIDEuMCwgMS4wLCAwLjAsXG4gIDAuMCwgMS4wLCAwLjAsXG5cbiAgMS4wLCAwLjAsIDAuMCxcbiAgMi4wLCAwLjAsIDEuMCxcbiAgMi4wLCAxLjAsIDEuMCxcbiAgMS4wLCAxLjAsIDAuMCxcblxuICAyLjAsIDAuMCwgMS4wLFxuICAzLjAsIDAuMCwgMS4wLFxuICAzLjAsIDEuMCwgMS4wLFxuICAyLjAsIDEuMCwgMS4wLFxuXG4gIDMuMCwgMC4wLCAxLjAsXG4gIDQuMCwgMC4wLCAwLjAsXG4gIDQuMCwgMS4wLCAwLjAsXG4gIDMuMCwgMS4wLCAxLjAsXG5cbiAgNC4wLCAwLjAsIDAuMCxcbiAgNS4wLCAwLjAsIDAuMCxcbiAgNS4wLCAxLjAsIDAuMCxcbiAgNC4wLCAxLjAsIDAuMCxcblxuXTtcblxuY2xhc3MgQ29sb3VyZWRQbGFuZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkUGxhbmUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRQbGFuZTtcblxuIl19